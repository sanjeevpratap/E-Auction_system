import React, { Component } from 'react';

class Login extends Component {

    state={
        credentials:{username: '', password: ''},
        p:[],
        C:{con:72000},
        res:{user:0,contact:0}

    }
    


    login= event=>{
        console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/auth/',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state.credentials)
        }).then(data=> data.json())
        .then(
            data=> {
                this.props.userLogin(data.token);
                this.props.userName(data.id);
                console.log(data,"              jjjjjj");
                  }
        ).catch(error => console.error(error))
    }
    register= event=>{
        console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/users/',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state.credentials)
        }).then(data=> data.json())
        .then(
            data=> {
                this.setState({
                    p:data
                })
                const res1=this.state.res;
                res1.user=this.state.p.id
                res1.contact=this.state.C.con;
                this.setState({
                    res:res1
                })
                this.createProfile();
                console.log(data);
                
                  }
        ).catch(error => console.error(error))
    }
    createProfile= event=>{

  
        fetch(`http://127.0.0.1:8000/ProfileCreate/`,{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state.res)
        }).then(data=> data.json())
        .then(
            data=> {
                console.log(data,"   manual");
                  }
        ).catch(error => console.error(error))
      
      
      
        
      }
    inputChanged= event =>{
        const cred=this.state.credentials;
        cred[event.target.name] =event.target.value;
        const con1=this.state.con;
        // con1[event.target.name]=event.target.value;
        this.setState({credentials: cred,
            // C:con1,
            
            
            
        }
        
            
            );
    }

    render() {
        return (
            <div>
                <h1>I am login</h1>
                <label >
                    UserName:
                    <input type="text" name='username' value={this.state.credentials.username} 
                    onChange={this.inputChanged}
                    />
                </label>
                <br />
                <label >
                    Contact:
                    <input type="text" name='con' value={this.state.C.con} 
                    onChange={this.inputChanged}
                    />
                </label>
                <br />
                <label >
                    Password:
                    <input type="password" name='password' value={this.state.credentials.password}
                     onChange={this.inputChanged}/>
                </label>
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        );
    }
}

export default Login;