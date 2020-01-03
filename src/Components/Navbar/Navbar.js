import React, { Component } from 'react';
import imagepolicy from '../Img/imagepolicy.jpeg';
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            
              <div>
                    
                
                <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 contianer" >
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div>
                <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11" style={{background:'green'}} >
                <a  className="nav1" href="/System">System</a>
                <a className="nav1" href="Gallery">Gallery</a>
                <a className="nav1" >Name:</a>
                </div>
                <div class="sys" >
                <a  href="/System">System</a>
                    </div>
                    <div class="gal">
                    <a className="nav1" href="Gallery">Gallery</a>
                </div>
                
                
                </div>
       </div>


                 
            
        );
    }
}

export default Navbar;





