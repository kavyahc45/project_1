import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import './Login.css';


class LoginPage extends Component {
    
    render() {
        return (
            <div className="body">
            <h1>LoginPage</h1>
            <br></br>
            <br></br>
            <div className="Form">
            <label>E-mail : </label>
            <input type="text" />
            <br></br>
            <br></br>
            <label> Password :</label>
            <input type="text" /></div>
            <br></br>
             <button>Submit</button>
            </div>
            );
            }
            }
            
            



    export default LoginPage;
   
   
   
   
   
   