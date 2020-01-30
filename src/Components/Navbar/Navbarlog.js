import React, { Component } from 'react';
import logo from './download.png';
import BrowserHistory from '../../Utils/BrowserHistory';
import './Navbar.css'

class Navbarlog extends Component {

    logout=()=>{
       
        BrowserHistory.push('/')
      }

    render() {
        return (
            <div>
                <div>
                 <div className="row navbackground1">
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
                 <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
                 <img src={logo} className="logoimg"></img>
                 </div>
                 <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 "></div>
               </div>
             </div>
           </div>
        );
    }
}

export default Navbarlog;