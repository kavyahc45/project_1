import React, { Component } from 'react';
import './Navbar.css'
import BrowerHistory from '../../Utils/BrowerHestory';

class Navbar extends Component {
  onHandleClick(){
        
      BrowerHistory.push('/System');
        }

        // onClickhandel(){
        
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
                <a  className="nav1" onClick={this.onHandleClick} >System</a>
                <a className="nav1" >Gallery</a>
                <a className="nav1" >Name:</a>
                </div>
                <div class="sys" >
                <a onClick={this.onHandleClick} >System</a>
                     </div>
                    <div class="gal">
                    <a  >Gallery</a>
                   
                </div>
                
                
                </div>
       </div>


                 
            
        );
    }
}

export default Navbar;





