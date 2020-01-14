import React, { Component } from 'react';

import   BrowserHistory from '../../Utils/BrowserHistory';
import './LoginForm.css'
import { connect } from 'react-redux';
import { loginHandle } from '../../Actions/LoginAction';

class LoginForm extends Component {

   
          
  
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: '',
            passwordError: '',
            emailError: ''
            // modal: false,login_modal: false, 
        }
    }
    handleSubmit = () => {
        const { password, email } = this.state
        const payload = { password, email }

        let reg_email = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/;
        let reg_pwd = /^[@#][A-Za-z0-9]{9,}$/;
        

        if (!this.state.password) this.setState({ passwordError: '* Password is required' });
        else if (!reg_pwd.test(this.state.password)) this.setState({ passwordError: '* Invalid Password' });
        
        if (!this.state.email) this.setState({ emailError: '* email is required' });
        else if (!reg_email.test(this.state.email)) this.setState({ emailError: '* Invalid Email' });
        

        
            this.props.loginHandle(payload);
        
    }

    // handleChange = (e) => {
    //     this.setState({ [e.target.name]: e.target.value });
    // }
    // handleSignin = () => {
    //     const { email, password } = this.state;
    //     const payload = { email, password }
    //     browserHistory.push("/");
    // }
    onHandleClick(){
        
        BrowserHistory.push('/Navbar');
          }



    render() {

        return (

            <div className="login">
                <h1 className="loginhead">Login </h1>
                <form onSubmit={this.handleSubmit} className='signup_form'>
                    <div className=" row signup_box">

                        <div>
                            <div className="loginform">
                                <label className="font">Email:</label>
                                <input type='text' name='email' onChange={this.handleChange} placeholder='email..'></input>
                            </div>
                            <p className='red'>{this.state.emailError}</p>
                            <div className="loginform">
                                <label className="font">Password:</label>
                                <input type='password' name='password' onChange={this.handleChange} className='input_box' placeholder='Password..'></input>
                            </div>
                            <p className='red'>{this.state.passwordError}</p>
                            <button type="button" class="btn btn-success signup_btn" onClick={this.onHandleClick}>Login</button>
                        </div>
                    </div>
                </form>
                {/* <p>
      {this.props.password}
      {this.props.email}</p> */}
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    const { password, email } = state.LoginReducer
    return { password, email }
}

export default connect(mapStateToProps, { loginHandle })(LoginForm);