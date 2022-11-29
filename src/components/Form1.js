import React, { Component } from 'react';
import Profile from './display/Profile';
// import History from './History';
class Form1 extends Component {
    constructor(props){
        super(props);
        this.loadHistory = this.loadHistory.bind(this);
    }
    state={
        form:[],
        his:[],
        value: "",
        avatar: "",
        contact: 777,
        gender:"",
        blood:"",
        profession:"",
        address:""
    }
   
    loadHistory1=() =>{
       
        // console.log(this.props.token)
        fetch('http://127.0.0.1:8000/Profile/',{
            method: 'GET',
            headers: {'Content-Type':'application/json',
            Authorization: `Token ${this.props.token}`
        },
            // body: JSON.stringify(this.state.his)
        })
         .then(data=> data.json()
         
         )
        .then(
            data=> {
                
                this.setState({
                    form:data
                })
                // for()
                // this.setState({his: data})
                // console.log(data)
                // console.log(this.state.s.form)
                //  console.log("clicked!!!         ",this.props.user);
                  
                  }
        ).catch(error => console.error(error))
         
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
                //console.log(data)
                // console.log("clicked!!!         ",this.props.user);
                 
                  
                  }
        ).catch(error => console.error(error))
        
         
    }
    
    onClick=()=> {
        this.loadHistory();
        this.loadHistory1();
     }
     
     fun=(value,avatar,contact,gender,blood,profession,address)=>{
        this.value=value;
        this.avatar=avatar;
        this.contact=contact
        this.gender=gender;
        this.blood=blood;
        this.profession=profession;
        this.address=address;
        //console.log(this.value,"     hello,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
     }
    
    // fun=(element)=>{
    //        if(element.username===={this.props.user}){

    //        }

    // }
  
    render() {
        // window.onload = function() {
        //     alert("hello!");
        // }
        // window.onload = function exampleFunction() {
        //     console.log('The Script will load now.');
        // }
        // window.onload=this.onClick();
        let user=this.props.user
      //  var sq = this.loadHistory();
        // if(this.l1===0){
        //     this.loadHistory1()
        // }
        // if(this.l===0){
        //     this.loadHistory()
        // }
        // this.loadHistory()
        

        return (
            <>
            <div>
                {/* {sq} */}
                {/* <h1>Form1 </h1> */}
                
                
                {this.state.form.map(element=>{
                    // return console.log(element.user,"      id")
                    
                    return  (element.user===user)&&this.fun(element.value,element.value,element.contact,element.gender,element.blood,element.profession,element.address);
                    // <h6 key={element.user}>bio={element.bio} contact={element.contact} avatar={element.avatar}</h6>
                })}
                {/* <button onClick={this.loadHistory1}>Load Form1</button> */}
                
            </div>
            <div>
            {/* {this.loadHistory()} */}
            {/* <h1>History</h1> */}
            
            {this.state.his.map(element=>{
                
                return  (element.id===user)&&<h6 key={element.id}><Profile first_name={element.first_name} password={element.password}
                last_name={element.last_name}  username={element.username} email={element.email} 
                date_joined={element.date_joined} value={this.value} avatar={this.avatar} contact={this.contact}
                gender={this.gender} blood={this.blood} profession={this.profession} address={this.address} user={user}
                /></h6>
            })}
            <button onClick={this.onClick} >click me</button>
            {/* <a href="click" onClick={this.onClick}>click</a> */}
            
        </div>
        </>
        );
    }
}

export default Form1;