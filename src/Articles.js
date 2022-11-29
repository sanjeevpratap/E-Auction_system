import React from "react";
import axios from "axios";

import Form from "./components/Form";
import Post from "./components/Post";


class Article extends React.Component {
      
    state={
        dataS:[]
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/PList/')
        .then(res =>{
            this.setState({
                dataS:res.data
            })
            console.log(res.data)
        })
    }
    // loadHistory1=() =>{
       
    //     // console.log(this.props.token)
    //     fetch('http://127.0.0.1:8000/PList/',{
    //         method: 'GET',
    //         headers: {'Content-Type':'application/json',
    //         // Authorization: `Token ${this.props.token}`
    //     },
    //         // body: JSON.stringify(this.state.his)
    //     })
    //      .then(data=> data.json()
         
    //      )
    //     .then(
    //         data=> {
    //             console.log(data);
                
    //             this.setState({
    //                 form:data
    //             })
               
                  
    //               }
    //     ).catch(error => console.error(error))
         
    // }
   
   

    render(){
        return(
            <>
            <div className="row  my-3">
                
                

                { this.state.dataS.map((element) => {
            return <div className='col-md-4' key={element.PId}>
              <Form  PName={element.PName} Description={element.Description} Price={element.Price} imgurl="https://source.unsplash.com/600x300/?nature"/>
            </div>
          })}


            </div>
            {/* <h2>Create an articles</h2>
            <Post requestType="post"
                  DepartmentId={null}
                  
            /> */}
            
            </>
        )
    }


}

export default Article