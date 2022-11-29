


import React, { Component } from 'react'

export class Form extends Component {

  render() {
    let { Description ,imgurl,PName,Price} = this.props;
    return (
      <div className='my-3' style={{display: 'flex'}}>
        <div className="card" >
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: '95%',zIndex: '1'}}>
              ${Price}
             
            </span>
          <img src={!imgurl ? "https://source.unsplash.com/600x300/?nature" : imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{PName}...</h5>
            <p className="card-text">{Description}...</p>
            {/* <p className='card-text'><small className='text-muted'>By {!author ? "unknown" : author} on {new Date(date).toGMTString()} </small> </p> */}
            {/* <p className='card-text'><small className='text-muted'>By {source.id ? source.id : "unknown"} name:{source.name}</small> </p> */}

            <a rel='noreferrer' href="/" target="_blank" className="btn btn-sn btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Form