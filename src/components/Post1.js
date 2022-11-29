import React, { Component } from 'react';
// import axios from "axios";
class History extends Component {
  
   state={
    v:{
        PName:'sanjjev',
        Description:'hello',
        DateOfJoining:'YYYY-MM-DD',
        ClosingDate:'YYYY-MM-DD',
        Price:1

    }
}



submit= event=>{
    // console.log(this.state.credentials);
    fetch('http://127.0.0.1:8000/PCreate/',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(this.state.v)
    }).then(data=> data.json())
    .then(
        data=> {
            console.log(data);
              }
    ).catch(error => console.error(error))
}
   
    change=event=>{
        const d=this.state.v;
        d[event.target.name]=event.target.value
        console.log(event.target.name,"             name")
        this.setState({
            v:d
        })
    }


    render() {
        let imgurl=false
        return (
            <div>
                        
  <div className="mb-2" width="30%" style={{width: '30%'}}>
    <label  className="form-label" >Product Name</label>

    <input   name='PName'   onChange={this.change} value={this.state.v.PName}/></div>
    <div className="mb-2" width="30%" style={{width: '30%'}}>
    <label  className="form-label" >Current Date</label>
    

    <input   name='DateOfJoining'   onChange={this.change} value={this.state.v.DateOfJoining}/></div>

    <div className="mb-2" width="30%" style={{width: '30%'}}>
    <label  className="form-label" >Closing Date</label>
    

    <input   name='DateOfJoining'   onChange={this.change} value={this.state.v.ClosingDate}/></div>

    <div className="mb-2" width="30%" style={{width: '30%'}}>
    <label  className="form-label" >Description</label>

    <input   name='Description'   onChange={this.change} value={this.state.v.Description}/></div>
    <div className="mb-2" width="30%" style={{width: '30%'}}>
    <label  className="form-label" >Price Name</label>

    <input   name='Price'   onChange={this.change} value={this.state.v.Price}/></div>
    
  
  
  <button htmltype="submit" className="btn btn-primary" onClick={this.submit}>Submit</button>

  <div className='my-3' style={{display: 'flex'}}>
        <div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '95%',zIndex: '1'}}>
              {this.state.v.PName} 
             
            </span>
          <img src={!imgurl ? "https://source.unsplash.com/600x300/?nature" : imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.state.v.Description}...</h5>
            <p className="card-text">{this.state.v.DateOfJoining}...</p>
            {/* <p className='card-text'><small className='text-muted'>By {!author ? "unknown" : author} on {new Date(date).toGMTString()} </small> </p> */}
            {/* <p className='card-text'><small className='text-muted'>By {source.id ? source.id : "unknown"} name:{source.name}</small> </p> */}

            <a rel='noreferrer' href="/" target="_blank" className="btn btn-sn btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
            </div>
        );
    }
}

export default History;