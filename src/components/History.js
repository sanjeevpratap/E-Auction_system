import React, { Component } from 'react';
import Profile from './display/Profile';

class History extends Component {
    
    state={
        his:[]
    }
   
    loadHistory=() =>{
        // console.log(this.props.token)
        fetch('http://127.0.0.1:8000/users/',{
            method: 'GET',
            headers: {'Content-Type':'application/json',
            Authorization: `Token ${this.props.token}`
        },
            // body: JSON.stringify(this.state.his)
        })
         .then(data=> data.json())
        .then(
            data=> {
                this.setState({
                    his:data
                })
                // for()
                // this.setState({his: data})
                console.log(data)
                 console.log("clicked!!!         ",this.props.user);
                 
                  
                  }
        ).catch(error => console.error(error))
        
         
    }
    
    // fun=(element)=>{
    //        if(element.username===={this.props.user}){

    //        }

    // }
  
    render() {
        let user=this.props.user
        
        return (
            
            <div>
                {/* {this.loadHistory()} */}
                <h1>History</h1>
                
                {this.state.his.map(element=>{
                    
                    return  (element.id===user)&&<h6 key={element.id}><Profile username={element.username} email={element.email} date_joined={element.date_joined} /></h6>
                })}
                <button onClick={this.loadHistory}>Load History</button>
            </div>
        );
    }
}

export default History;