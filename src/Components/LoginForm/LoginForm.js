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
    render() {
        return (
            <div className="signupbody">
                <div id="main-registration-container">
                    <div class="row background">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <h3 className='heading'>Login</h3>
                            <label className="font">Email:</label>
                            <input type='text' name='email' onChange={this.handleChange} placeholder='email..'/>
                            <p className='red'>{this.state.emailError}</p>
                            <label className="font">Password:</label>
                            <input type='password' name='password' onChange={this.handleChange} placeholder='Password..'/>
                            <p className='red'>{this.state.passwordError}</p>
                            <button type="button" class="btn-success" onClick={this.onHandleClick}>Login</button>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                    </div>
                </div>




                {/* <h1 className="loginhead">Login </h1>
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
                </form> */}
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