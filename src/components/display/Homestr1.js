import React, { Component } from 'react';
//  import Homecarousal from './css/Homecarousal.css';
class Homestr1 extends Component {
    
    render() {
        const demo=this.props.demo
        const demoId=this.props.demoId
        // const demo=this.props.demo
        return (
            <div>
                {/* {this.fun()} */}
                
                <homecarousal/>
        
          {/* <img src="https://source.unsplash.com/800x600/?festival" alt="..." style={{padding: '20px ', marginLeft:'200px '}} />
          <img src="https://source.unsplash.com/800x600/?auction" alt="..." /> */}
         <div className="container">
 
  <div id="demo1" className="carousel  slide" data-ride="carousel">

    <ol className="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" className="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ol>

   
    <div className="carousel-inner no-padding">

      <div className="item active">
        <div className="col-xs-3 col-sm-3 col-mf-3">
            <div className="card" style={{width: '18rem'}}>
               <img src="..." className="card-img-top" alt="..."/>
               <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="/" className="btn btn-primary">Go somewhere</a>
               </div>
            </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-mf-3">
            <div className="card" style={{width: '18rem'}}>
               <img src="..." className="card-img-top" alt="..."/>
               <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="/" className="btn btn-primary">Go somewhere</a>
               </div>
            </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-mf-3">
            <div className="card" style={{width: '18rem'}}>
               <img src="..." className="card-img-top" alt="..."/>
               <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="/" className="btn btn-primary">Go somewhere</a>
               </div>
            </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-mf-3">
            <div className="card" style={{width: '18rem'}}>
               <img src="..." className="card-img-top" alt="..."/>
               <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="/" className="btn btn-primary">Go somewhere</a>
               </div>
            </div>
        </div>
      </div>

      <div className="item">
        <div className="col-xs-3 col-sm-3 col-mf-3">
            <div className="card" style={{width: '18rem'}}>
               <img src="..." className="card-img-top" alt="..."/>
               <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="/" className="btn btn-primary">Go somewhere</a>
               </div>
            </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-mf-3">
            <div className="card" style={{width: '18rem'}}>
               <img src="..." className="card-img-top" alt="..."/>
               <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="/" className="btn btn-primary">Go somewhere</a>
               </div>
            </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-mf-3">
            <div className="card" style={{width: '18rem'}}>
               <img src="..." className="card-img-top" alt="..."/>
               <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="/" className="btn btn-primary">Go somewhere</a>
               </div>
            </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-mf-3">
            <div className="card" style={{width: '18rem'}}>
               <img src="..." className="card-img-top" alt="..."/>
               <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="/" className="btn btn-primary">Go somewhere</a>
               </div>
            </div>
        </div>
      </div>
    
      <div className="item">
        <div className="col-xs-3 col-sm-3 col-mf-3">
            <div className="card" style={{width: '18rem'}}>
               <img src="..." className="card-img-top" alt="..."/>
               <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="/" className="btn btn-primary">Go somewhere</a>
               </div>
            </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-mf-3">
            <div className="card" style={{width: '18rem'}}>
               <img src="..." className="card-img-top" alt="..."/>
               <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="/" className="btn btn-primary">Go somewhere</a>
               </div>
            </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-mf-3">
            <div className="card" style={{width: '18rem'}}>
               <img src="..." className="card-img-top" alt="..."/>
               <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="/" className="btn btn-primary">Go somewhere</a>
               </div>
            </div>
        </div>
        <div className="col-xs-3 col-sm-3 col-mf-3">
            <div className="card" style={{width: '18rem'}}>
               <img src="..." className="card-img-top" alt="..."/>
               <div className="card-body">
                   <h5 className="card-title">Card title</h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="/" className="btn btn-primary">Go somewhere</a>
               </div>
            </div>
        </div>
      </div>
  
    </div>

   
    
  </div>
</div>


            </div>
        );
    }
}

export default Homestr1;