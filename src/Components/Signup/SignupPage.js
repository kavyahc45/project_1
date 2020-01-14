import React, { Component } from 'react';
import { connect } from 'react-redux';
import BrowserHistory from '../../Utils/BrowserHistory';
import { registerHandle } from '../../Actions/SingupAction';
import './Sign.css';


class SignupPage extends Component {


    constructor(props) {
        debugger;
        super(props);

        this.state = {
            firstname: '',
            email: '',
            password: '',
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
        debugger

        e.preventDefault();

        const payload = {
            firstname: this.state.firstname,
            email: this.state.email,
            password: this.state.password
        }
        if (this.state.firstname.length === 0 && this.state.email.length === 0 && this.state.password.length === 0) {
            this.setState({
                ferr: "Firstname is required",
                uerr: "Email is required",
                perr: "Password is required"

            })
        }
        else if (this.state.firstname.length === 0) {
            this.setState({ ferr: "username is required" })
        }
        else if (this.state.email.length === 0) {
            this.setState({ uerr: "email is required" })
        }
        else if (this.state.password.length === 0) {
            this.setState({ perr: "Password is required" })
        }
        else if (!this.state.firstname.match(/^[A-Za-z]{5,15}$/)) {
            this.setState({ ferr: "Please enter the valid username" })
        }
        else if (!this.state.email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/)) {
            this.setState({ uerr: "Please enter the valid email" })
        }
        else if (!this.state.password.match(/^[@#][A-Za-z0-9]{9,11}$/)) {
            this.setState({ perr: "Please enter the valid password" })
        }
       
        this.props.registerHandle(payload);
    }

    render() {
        return (

            <div id="main-registration-container">

                <div class="row background">

                    {/* <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"> */}
                        <div id="register">
                            <h3 class="name1">Signup</h3>                       
            {/* <button className="googleicon1"><a href="https://www.google.co.in/" class="fa fa-google"></a>Login in with google</button><br/><br/>
            <button className="socialicon1"><a href="http://facebook.com/jaketrent" class="fa fa-facebook"></a>Login in with facebook</button><br/><br/> */}
                            <label className="frstname1"><b>User Name :</b></label>
                            <input type="text" name="firstname" placeholder="display name" className=" frstnameinput" onChange={this.onHandleChange} /><br />
                            <p className="errorMsg1 " >{this.state.ferr}</p>
                            <label className="email1"><b>Email :</b></label>
                            <input type="text" placeholder="Email" name="email" className="emailinput" onChange={this.onHandleChange} /><br />
                            <p className="errorMsg1 " >{this.state.uerr}</p>
                            <label className="password1"><b>Password :</b></label>
                            <input type="password" placeholder="Password" name="password" className=" passwordinput" onChange={this.onHandleChange} /><br /><br />
                            <p className="errorMsg1 " >{this.state.perr}</p>
                            {/* <a href="" onClick={this.onHandleClick}>you have already account</a> */}
                            <p className="errorMsg1 ">{this.state.phnerr}</p>
                            <button onClick={this.onHandleClick} className="button1"><b>Register</b></button>
                            <button onClick={this.onHandleClicksCancel} className="buttoncancel">Cancel</button>
                            </div>
                    {/* </div> */}
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