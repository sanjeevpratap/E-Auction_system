import React, { Component } from 'react';

class Profile extends Component {
  state={
    manual:{ user:this.props.user, value:this.props.value, contact:this.props.contact ,gender:this.props.gender,blood:this.props.blood,profession:this.props.profession,address:this.props.address},
    defined:{password:this.props.password, username:this.props.username,email:this.props.email, date_joined: this.props.date_joined,first_name:this.props.first_name, last_name:this.props.last_name},
    edit:true
    
}

change=event=>{
  
  const d=this.state.manual;
  const df=this.state.defined;
  
  if(!(this.state.edit)){
  d[event.target.name]=event.target.value
  df[event.target.name]=event.target.value
  console.log(event.target.value,"             name",this.state.edit)
  
  this.setState({
      manual:d,
      defined:df
  })}
  
}
save1= event=>{

  
  fetch(`http://127.0.0.1:8000/${this.props.user}/profill/`,{
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(this.state.manual)
  }).then(data=> data.json())
  .then(
      data=> {
          console.log(data,"   manual");
            }
  ).catch(error => console.error(error))



  
}

save2= event=>{
  fetch(`http://127.0.0.1:8000/users/${this.props.user}/`,{
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(this.state.defined)
}).then(data=> data.json())
.then(
    data=> {
        console.log(data,"     definde");
          }
).catch(error => console.error(error))
}

save=()=>{
  this.save1();
  this.save2();
  this.setState({
    edit:true
  })
}

 
edit=()=>{
   
   
  this.setState({
    edit:false,
    
    
  })
   console.log(this.props.edit)
}


    render() {
       //this.onClick();
        
        let {username,email,date_joined,avatar,value,first_name,last_name,contact,gender,blood,profession,address}=this.props
        // alert("hello")
       
        
        return (
            <>
            
            {/* <div>

                <div className="mb-2" width="30%" style={{width: '30%'}}>
                    <label  className="form-label" >Full Name      :      
                    <input   name='First Name' id="profile"   defaultValue={username}/></label>
                    <label  className="form-label" >Last Name      :
                    <input   name='Last Name' id="profile"   defaultValue={username}/></label>
                    <label  className="form-label" >Email adresss  :
                    <input   name='Email adress' id="profile"   defaultValue={email}/></label>
                    <label  className="form-label" >Date_joined
                    <input   name='date_joined' id="profile"   defaultValue={date_joined}/></label>
                    <label  className="form-label" >Full Name
                    <input   name='First Name' id="profile"   defaultValue={username}/></label>
                    <label  className="form-label" >Full Name
                    <input   name='First Name' id="profile"   defaultValue={username}/></label>
                    <label  className="form-label" >Full Name
                    <input   name='First Name' id="profile"   defaultValue={username}/></label>

    
                </div>

            </div> */}

<div className="ScriptTop">
    <div className="rt-container">
        <div className="col-rt-4" id="float-right">
 
          
            
        </div>
       
    </div>
</div>

<header className="ScriptHeader">
    <div className="rt-container">
    	<div className="col-rt-12">
        	<div className="rt-heading">
            	<h1>User Profile Page </h1>
                {/* <p>{value}</p> */}
            </div>
        </div>
    </div>
</header>

<section>
    <div className="rt-container">
          <div className="col-rt-12">
              <div className="Scriptcontent">
              

<div className="student-profile py-4">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="card shadow-sm">
          <div className="card-header bg-transparent text-center">
            <img className="profile_img" src="https://source.unsplash.com/600x300/?student" alt="student dp"/>
            <h3>{username}</h3>
          </div>
          <div className="card-body">
            {/* <form action=""defaultValue="FirstName">hlelo</form> */}
            <form className="mb-0"><strong className="pr-1" >First Name:</strong><input name='first_name' onChange={this.change}  type="text" value={ this.state.defined.first_name } style={{border:'none'}}/></form>
            <form className="mb-0"><strong className="pr-1" >Last Name:</strong><input name='last_name' onChange={this.change}  type="text" value={ this.state.defined.last_name } style={{border:'none'}}/></form>
            <form className="mb-0"><strong className="pr-1" >Email:</strong><input name='email' onChange={this.change}  type="text" value={ this.state.defined.email } style={{border:'none'}}/></form>
           
            <form className="mb-0"><strong className="pr-1" >Contact:</strong><input name='contact' onChange={this.change}  type="text" value={ this.state.manual.contact } style={{border:'none'}}/></form>
            <form className="mb-0"><strong className="pr-1" >Address:</strong><input name='address' onChange={this.change}  type="text" value={ this.state.manual.address } style={{border:'none'}}/></form>

            {/* <p className="mb-0"><strong className="pr-1">Contact No:</strong>{contact}</p> */}
            {/* <p className="mb-0"><strong className="pr-1">Address:</strong>{address}</p> */}
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card shadow-sm">
          <div className="card-header bg-transparent border-0">
            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
          </div>
          <div className="card-body pt-0">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th width="30%">Profession</th>
                  <td width="2%">:</td>
                  <td><input name='profession' onChange={this.change}  type="text" value={ this.state.manual.profession } style={{border:'none'}}/></td>
                  {/* <td>{profession}</td> */}
                  {/* <form className="mb-0"><input name='address' onChange={this.change}  type="text" value={ this.state.manual.address } style={{border:'none'}}/></form> */}

                </tr>
                <tr>
                  <th width="30%">Date Joined	</th>
                  <td width="2%">:</td>
                  <td><input name='date_joined' onChange={this.change}  type="text" value={ this.state.defined.date_joined } style={{border:'none'}}/></td>
                  {/* <td>{date_joined}</td> */}
                </tr>
                <tr>
                  <th width="30%">Gender</th>
                  <td width="2%">:</td>
                  <td><input name='gender' onChange={this.change}  type="text" value={ this.state.manual.gender } style={{border:'none'}}/></td>
                  {/* <td>{gender}</td> */}
                </tr>
                <tr>
                  <th width="30%">Religion</th>
                  <td width="2%">:</td>
                  <td>Group</td>
                </tr>
                <tr>
                  <th width="30%">blood</th>
                  <td width="2%">:</td>
                  <td><input name='blood' onChange={this.change}  type="text" value={ this.state.manual.blood } style={{border:'none'}}/></td>
                  {/* <td>{blood}</td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
          <div style={{height: '26px'}}></div>
        <div className="card shadow-sm">
          <div className="card-header bg-transparent border-0">
            <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Other Information</h3>
          </div>
          <div className="card-body pt-0">
               <textarea name='value' onChange={this.change}   value={ this.state.manual.value } style={{border:'none'}} rows={5}
          cols={85} />
              {/* <p><input name='' onChange={this.change}  type="text" value={ this.state.manual.profession } style={{border:'none'}}/></p> */}
              {/* <p>{value} ks</p> */}
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

           
    		</div>
		</div>
    </div>
</section>


<button onClick={this.edit} >edit</button>
<button onClick={this.save}>Save me</button>
            
            </>
        );
    }
}

export default Profile;