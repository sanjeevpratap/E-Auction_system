import React, { Component } from 'react';

class Homebutton extends Component {
    render() {
        return (
            <div>
                <a className="carousel-control-prev" href={demoId} role="button" data-slide="prev" style={{ color: 'black' }}>
                    {/* <span className="carousal-control-prev-icon" style={{color:'black'}}>prev</span> */}
                    prev
                </a>

                <a className="carousel-control-next" href={demoId} role="button" data-slide="next" style={{ color: 'black' }}>
                    {/* <span className="carousel-control-next-icon">Next</span> */}
                    next
                </a>
            </div>
        );
    }
}

export default Homebutton;