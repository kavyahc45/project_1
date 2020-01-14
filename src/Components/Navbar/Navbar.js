import React, { Component } from 'react';
import './Navbar.css'
import BrowserHistory from '../../Utils/BrowserHistory';

class Navbar extends Component {
  onHandleClick(){
        
    BrowserHistory.push('/Table');
        }

        // onClickhandel_gallery(){
        
        //   BrowerHistory.push('/Gallery');
        //     } 
    render() {
      
        return (
            
              <div>
                    
                
                <div className="row">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 contianer" >
                  <div className="bar3"></div>
                  <div className="bar3"></div>
                  <div className="bar3"></div>
                </div>
                <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11" style={{background:'green'}} >
                <a  className="nav1" onClick={this.onHandleClick} >System Get Started</a>
                <a className="nav1" onClick={this.onHandleClick_gallery} >Gallery</a>
                <a className="nav1" >Name:</a>
                </div>
                <div class="sys" >
                <a onClick={this.onHandleClick}>System Get Started</a>
                     </div>
                    <div class="gal">
                    <a onClick={this.onHandleClick_gallery}>Gallery</a>
                   
                </div>
                
                
                </div>
       </div>


                 
            
        );
    }
}

export default Navbar;





