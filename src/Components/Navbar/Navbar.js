import React, { Component } from 'react';
import './Navbar.css'
import BrowserHistory from '../../Utils/BrowserHistory';

class Navbar extends Component {
  state={
    visible:false
  }
  logout=()=>{
    sessionStorage.removeItem('authentication')
    BrowserHistory.push('/')
  }
  onHandleClick=()=>{
    BrowserHistory.push('/')
  }

  onHandleClick_admin=()=>{
    BrowserHistory.push('/admin')
  }
  
  componentDidMount=()=>{
    sessionStorage.getItem('role')=='admin' ? this.setState({visible: false}) : this.setState({visible: true})
  }
  

  render() {
    return (
      <div className="row navbackground">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
          < button  onClick={this.onHandleClick}>Home</ button>
        </div>

         <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7 "></div>

         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
          < button hidden={this.state.visible}  onClick={this.onHandleClick_admin}>Admin</ button>
          </div>

        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
          < button  onClick={this.logout}>Logout</ button>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
      </div>
    );
  }
}

export default Navbar;





