import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrowserHistory from '../../Utils/BrowserHistory';
import { registerHandle } from '../../Actions/SingupAction';
import './Sign.css';
import logo from './imgdownlogo.png';
import Navbarlog from '../Navbar/Navbarlog';

class SignupPage extends Component {

  constructor(props) {
    debugger;
    super(props);

    this.state = {
      firstname: '',
      email: '',
      password: '',
      role: '',
      ferr: '',
      uerr: '',
      perr: ''
    };
  }
  onHandleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  onHandleClicksCancel = (e) => {
    BrowserHistory.push('/');
  }
  onHandleClick = (e) => {
    var temp = 0;
    e.preventDefault();
    const { firstname, email, password } = this.state
    const payload = { firstname, email, password }
    if (this.state.firstname.length != 0 && this.state.firstname.match(/^[A-Za-z]{5,15}$/) && this.state.firstname != null) {
      temp = temp + 1;
    }
    else
      this.setState({ ferr: "username required" })
    if (this.state.email.length != 0 && this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/) && this.state.email != null) {
      temp = temp + 1;
    }
    else
      this.setState({ uerr: "Email required" })
    if (this.state.password.length != 0 && this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/) && this.state.password != null) {
      temp = temp + 1;
    }
    else
      this.setState({ perr: "password required" })
    if (temp == 3) {
      this.props.registerHandle(payload);
    }
  }
  render() {
    return (
      <div className="signupbody">
        <Navbarlog />

        <div id="main-registration-container">
          <div class="row background">
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <img src={logo} className="logoimg1"></img>
              <h3 className='heading1'>Signup</h3>
              <label ><b>User Name :</b></label><br></br>
              <input type="text" name="firstname" placeholder="User name.." className="input_field" onChange={this.onHandleChange} />
              <p className="red" >{this.state.ferr}</p>
              <label><b>Email :</b></label><br></br>
              <input type="text" placeholder="Email.." name="email" className="emailinput" onChange={this.onHandleChange} />
              <p className="red " >{this.state.uerr}</p>
              <label><b>Password :</b></label><br></br>
              <input type="password" placeholder="Password.." name="password" className=" passwordinput" onChange={this.onHandleChange} />
              <p className="red " >{this.state.perr}</p>
              <button onClick={this.onHandleClick} >Register</button>
              <button onClick={this.onHandleClicksCancel} className="buttoncancel">Cancel</button>
              <div>you have already registered?
              <a href="Login" >LOGIN </a></div>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { firstname, email, password } = state.SignupReducer
  return { firstname, email, password }
}
export default connect(mapStateToProps, { registerHandle })(SignupPage);