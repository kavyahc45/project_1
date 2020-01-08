import React, { Component } from 'react';
import './LoginForm.css'
import BrowerHistory from '../../Utils/BrowerHestory';

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
  
      };
  
      handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      }
  
      submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
           
            fields["emailid"] = "";
            
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
  
      }
  
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        
        
  
        if (!fields["emailid"]) {
          formIsValid = false;
          errors["emailid"] = "*Please enter your email-ID.";
        }
  
        if (typeof fields["emailid"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(fields["emailid"])) {
            formIsValid = false;
            errors["emailid"] = "*Please enter valid email-ID.";
          }
        }
  
        if (!fields["mobileno"]) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter your mobile no.";
        }
  
        
        if (!fields["password"]) {
          formIsValid = false;
          errors["password"] = "*Please enter your password.";
        }
  
        if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
            formIsValid = false;
            errors["password"] = "*Please enter secure and strong password.";
          }
        }
  
        this.setState({
          errors: errors
        });
        return formIsValid;
    }
    onHandleClick(){
      BrowerHistory.push('./Navbar');
    }
  


    render() {
        return (
            <div id="main-registration-container">
            <div id="register">
               <h3>Login</h3>
               <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
              
               {/* <label>Name</label>
               <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
               <div className="errorMsg">{this.state.errors.username}</div>
                */}
               <label>Email ID</label>
               <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
               <div className="errorMsg">{this.state.errors.emailid}</div>
              
               <label>Password</label>
               <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
               <div className="errorMsg">{this.state.errors.password}</div>
               <button onClick={this.onHandleClick} className="button">Login</button>
               {/* <input type="submit" className="button"  value="Login"/> */}
               {/* <input type="submit" onClick={this.onHandleClick} className="button" value="Signup"/> */}
               </form>
           </div>
           </div>
               );
           }
       }

export default LoginForm;