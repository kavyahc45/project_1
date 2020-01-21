import React, { Component } from 'react';
import './Navbar.css'
import BrowserHistory from '../../Utils/BrowserHistory';

class Navbar extends Component {
  logout=()=>{
    sessionStorage.removeItem('authentication')
    BrowserHistory.push('/')
  }
  onHandleClick=()=>{
    BrowserHistory.push('/gen_inf')
  }
  render() {
    return (
      <div className="row navbackground">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
          < button  onClick={this.onHandleClick}>Home</ button>
        </div>
        
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 "></div>

        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
          < button  onClick={this.logout}>Logout</ button>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
      </div>
    );
  }
}

export default Navbar;





