import logo from './logo.svg';
import React , {useState} from 'react';
import './App.css';
import Article from './Articles';
import Navbar from './components/Navbar';
import History from './components/History';
import {
	
	Routes,
	Route,
	 
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Post1 from './components/Post1';
import Form1 from './components/Form1';


function App() {

  const [token,setToken]=useState('');
  const [user,setuser]=useState(1);

  const userLogin= (tok)=>{
    setToken(tok);
    console.log(tok,"                hello");
  }
  const userName= (use)=>{
    setuser(use);
    console.log(use,"                hello");
  }
  return (
    <>
    {/* <Login userLogin={userLogin}/> */}
    <Navbar/>
    
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Post1' element={<Post1 token={token} />}/>
    <Route exact path='/Article' element={<Article/>}/>
    <Route exact path='/Login' element={<Login userLogin={userLogin} userName={userName}/>}/>
    <Route exact path='/History' element={<History user={user}/>}/>
    <Route exact path='/Form1' element={<Form1 user={user}/>}/>
    
   </Routes>
    
    
    
    </>
  );
}

export default App;
