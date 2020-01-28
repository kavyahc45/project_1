import React, { Component } from 'react';
import BrowserHistory from '../../Utils/BrowserHistory';
import logo from './download.png';

class Nav extends Component {

 onHandleClick_signup=()=>{
        BrowserHistory.push('./signup')
    }
    onHandleClick_login=()=>{
      BrowserHistory.push('./login')
    }

    render() {
        return (
            <div>
                <div className="row navbackground1">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
          <img src={logo} className="logoimg"></img>
        </div>

         <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 "></div>
         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
          < button onClick={this.onHandleClick_signup}>Signup</ button>
        </div>

        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
          < button onClick={this.onHandleClick_login}>Login</ button>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
      </div>
            </div>
        );
    }
}

export default Nav;