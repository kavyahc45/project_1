import React, { Component } from 'react';
import   BrowserHistory from '../../Utils/BrowserHistory';
import './LoginForm.css'
import { connect } from 'react-redux';
import { loginHandle } from '../../Actions/LoginAction';
import logo from './imgdownlogo.png';
import Navbarlog from '../Navbar/Navbarlog';
import FooterComp from '../Navbar/FooterComp';





class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role:'',
            password: '',
            email: '',
            passwordError: '',
            emailError: ''
        }
    }
    onHandleClick = () => {
        const { password, email } = this.state
        const payload = { password, email }
        var temp=0;

        let reg_email = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/;
        let reg_pwd = /^[@#][A-Za-z0-9]{9,}$/;
        
        if (!this.state.password) this.setState({ passwordError: ' Invalid Password' });
        else if (!reg_pwd.test(this.state.password)) this.setState({ passwordError: 'Invalid Password' });
        else temp=temp+1
        
        if (!this.state.email) this.setState({ emailError: ' Invalid email' });
        else if (!reg_email.test(this.state.email)) this.setState({ emailError: ' Invalid email' });
        else temp=temp+1
        if(temp==2){
            this.props.loginHandle(payload);
            
        }       
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onHandleClicksCancel = (e) => {
        BrowserHistory.push('/signup');
    }

    confirmmail=(e)=>{
        sessionStorage.setItem('change',this.state.email)
        BrowserHistory.push('/confirmmail');
        }

    render() {
        return (
            <div className="signupbody">
              <Navbarlog/>
          
                <div id="main-registration-container">
                    <div class="row background">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                           
                        <img src={logo} className="logoimg1"></img>
                            <h3 className='heading1'>Login</h3>
                            <label className=""><b>Email:</b></label><br></br>
                            <input type='text' name='email' onChange={this.handleChange} placeholder='email..'/>
                            <p className='red'>{this.state.emailError}</p>
                            <label className="font"><b>Password:</b></label><br></br>
                            <input type='password' name='password' onChange={this.handleChange} placeholder='Password..'/>
                            <p className='red'>{this.state.passwordError}</p>
                            <button type="button" class="cul" onClick={this.onHandleClick} ><b>Login</b></button>
                            <button onClick={this.onHandleClicksCancel}  className="buttoncancel">Cancel</button>
                        </div>
                       
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                    </div>
                </div>
                  <div>
                <a onClick={this.confirmmail} className="forgetpassword"><b>Forget Password</b></a></div>
             
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    const { password, email } = state.LoginReducer
    return { password, email }
}

export default connect(mapStateToProps, { loginHandle })(LoginForm);