import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import BrowserHistory from '../Utils/BrowserHistory'

class Accountpage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        name: '',
        address: '',
      email: '',
      mobileNumber: '',

      amerror:'',
      uerr:'',
      perr:''
        
        };
        }
        onHandleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        }
        onHandleClick = (e) => {
        e.preventDefault();
        const payload = {
            name: this.state.text
        }

        if (this.state.name.length === 0 ) {
        this.setState({
        texterror: "name is required"
       
        })
        }
        else if (this.state.name.length === 0 && !this.state.name.match(/^[A-Za-z]{5,15}$/)) {
        this.setState({ amerror: "enter the name here" })
        }
        else if (this.state.email.length === 0) {
            this.setState({ uerr: "email is required" })
        }
        else if (this.state.address.length === 0) {
            this.setState({ perr: "Address is required" })
        }

        else if (this.state. mobileNumber.length === 0) {
            this.setState({ perr: " MobileNumber is required" })
        }

        // else {
        // BrowserHistory.push('/dashboard')
        // }
        this.props.questionHandle(payload);
         
        }

        componentDidMount(){
            axios.get('http://localhost:4013/question')
            .then(response => {
            this.setState({ Users: response.data });
            })
            .catch(function (error) {
            console.log(error);
            })
            }
            tabRow(){
            return this.state.Users.map(function(object, i){
            return <TableRow obj={object} key={i} />;
            });
            }
    

    render() {
        return (
            <div>
                  <label className="name"><b>Name</b></label>
          <input type="text" name= "text" placeholder="enter text here" className=" text1" onChange={this.onHandleChange} /><br />
          {/* <p  className="errorMsg " >{this.state.texterror}</p> */}
          <label className="email"><b>Email :</b></label>
                            <input type="text" placeholder="Email" name="email" className="emailinput" onChange={this.onHandleChange} /><br />
                            <p className="errorMsg " >{this.state.uerr}</p>
                            <label className="email"><b>Address :</b></label>
                            <input type="text" placeholder="Email" name="email" className="emailinput" onChange={this.onHandleChange} /><br />
                            <p className="errorMsg " >{this.state.uerr}</p>
                            <label className="email"><b>MobileNumber :</b></label>
                            <input type="text" placeholder="Email" name="email" className="emailinput" onChange={this.onHandleChange} /><br />
                            <p className="errorMsg " >{this.state.uerr}</p>
          <button onClick={this.onHandleClick} className="button"><b>Save</b></button>
            </div>
        );
    }
}

export default Accountpage;