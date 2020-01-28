import React, { Component } from 'react';
import axios from 'axios';
import  './LoginForm.css';

class ForgetPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
          _id:'',
          password:''
           }
        }

        handlechange=(e)=>{
          debugger
          this.setState({password:e.target.value})
        }
    changepassw = () => {
      debugger
      const payload = {
        email: sessionStorage.getItem('change'),
        password: this.state.password
        }
        console.log(payload)
      
        axios.put(`http://localhost:4002/reset`,payload)
          .then(console.log('update'))
          .catch(err => console.log(err))
        window.location.reload();
      }
 

    render() {
        return (
            <div className="forget" >
                <label className="newpass"><h2>New Password</h2></label><br/><br/>
                <input type="text" onChange={this.handlechange} placeholder="enter new password"></input><br/><br/>
            <button onClick={this.changepassw} name="password" className="btn btn-danger">change password</button>
            </div>
        );
    }
}

export default ForgetPassword;