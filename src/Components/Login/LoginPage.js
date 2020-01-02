import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';

class LoginPage extends Component {
    
    render() {
        return (
            <div className="body">
            <h1>LoginPage</h1>
            <div className="Form">
            <label>FirstName:</label>
            <input type="text" name="Firstname "/>
            <label>LastName:</label>
            <input type="text" />
            <label> Password:</label>
            <input type="text" />
            <label>Confirm Password:</label>
            <input type="text" />
            <label>E-mail:</label>
            <input type="text" name="Firstname "/>
            <label>Phone:</label>
            <input type="text" /> </div>
            <button>Submit</button>
            
            </div>
            );
            }
            }
            
            



    export default LoginPage;
   
   
   
   
   
   