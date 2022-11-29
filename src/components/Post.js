
import axios from "axios";

import React, { Component } from 'react';

class Post extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: ""
    //     }}

    handleForSubmit =(event,requestType,DepartmentId)=>{
        event.preventDefault();
        const DepartmentName = event.target.DepartmentName.value;
        
        // console.log(value
        console.log(DepartmentName)
        alert(DepartmentName)
        // switch(requestType){
        //     case 'post':
        //         return axios.post('http://127.0.0.1:8000/create/',{
        //             DepartmentName
        //         })
        //         .then(res => console.log(res))
        //         .catch(error => console.error(error))
                
                
                
        //     case 'put':
        //         return axios.put(`http://127.0.0.1:8000/${DepartmentId}/update/`,{
        //             DepartmentName
        //         })
        //         .then(res => console.log(res))
        //         .catch(error => console.error(error))
                
                
        //     default:
        //         console.log("hello")
        // }
    }


    render() {
        return (
            <div>
                <form onSubmit={(event)=>this.handleForSubmit(event,
                    this.props.requestType,
                    this.props.DepartmentId)}>
  <div className="mb-2" width="30%" style={{width: '30%'}}>
    <label  className="form-label" >Enter Department</label>
    <input   name="DepartmentName" id="DepartmentName"  defaultValue="Search..."/>
    
  </div>
  
  <button htmltype="submit" className="btn btn-primary" >Submit</button>
</form>
            </div>
        );
    }
}

export default Post;