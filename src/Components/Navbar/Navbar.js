import React, { Component } from 'react';
import './Navbar.css'
import BrowserHistory from '../../Utils/BrowserHistory';
import axios from 'axios';

class Navbar extends Component {

   constructor(props) {
        super(props);
        this.state = {
          email: '',
          data:[],
          visible:false
        }
      }

      handlechange= (event) =>{
        this.setState({[event.target.email]:event.target.value})
       
    }
    onHandleClick = (e) => {
      const {email}=this.state
      const payload = {email}
      this.props.loginHandle(payload);
    }

  logout=()=>{
    sessionStorage.removeItem('authentication')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('email')
    BrowserHistory.push('/')
  }
  onHandleClick=()=>{
    BrowserHistory.push('/gen_inf')
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
          < button  onClick={this.onHandleClick} className="nsignup">Home</ button>
        </div>

         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
        </div>

         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 nave">
         {sessionStorage.getItem('email')}
           </div>

         <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 ">
          < button hidden={this.state.visible}  onClick={this.onHandleClick_admin} className="nsignup">Admin</ button>
          </div>
         <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 ">
          < button  onClick={this.logout} className="nsignup">Logout</ button>
        </div>
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
      </div>
    );
  }
}

export default Navbar;





