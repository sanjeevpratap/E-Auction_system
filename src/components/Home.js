


import React, { Component } from 'react';
import Homestr from './display/Homestr';
import Homestr1 from './display/Homestr1';


// import  from '../img/im6.jpg';
// import im6 from '../img/im6.jpg';

class Home extends Component {
    render() {
        
        return (
            <div className='container'>
              <h1>WELCOME TO HOME</h1>

           
          
           <div className='inprogress'>
                <div className='container' style={{marginTop:'30px', backgroundColor:'blue',}}>
                <h3 style={{color:'red',left:'-100px'}}>ON DEMAND </h3>
                </div>
                    <Homestr />
           </div>
           <div className='inprogress'>
                <div className='container' style={{marginTop:'30px', backgroundColor:'blue',}}>
                <h3 style={{color:'red',left:'-100px'}}>BID IN PROGRESS </h3>
                </div>
                    <Homestr1 demoId="#demo" demo="demo"/>
           </div>
           <div className='most_view'>
                <div className='container' style={{marginTop:'30px', backgroundColor:'blue',}}>
                <h3 style={{color:'red',left:'-100px'}}>MOST VIEW LIST </h3>
                </div>
                    <Homestr1/>
           </div>
           <div className='saled'>
                <div className='container' style={{marginTop:'30px', backgroundColor:'blue',}}>
                <h3 style={{color:'red',left:'-100px'}}>TOP SALED PRODUCT </h3>
                </div>
                    <Homestr1/>
           </div>
           <div className='coming'>
                <div className='container' style={{marginTop:'30px', backgroundColor:'blue',}}>
                <h3 style={{color:'red',left:'-100px'}}>COMING PRODUCT.. </h3>
                </div>
                    <Homestr1/>
           </div>
            
            
            
            </div>
        );
    }
}

export default Home;