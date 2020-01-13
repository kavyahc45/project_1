import React, { Component } from 'react';
import { studentProfile } from './UserFunction';
import RepoList from './ RepoList';
// import Edit from './Edit';
import BrowserHistory from '../Utils/BrowserHistory';


class UserComponent extends Component {

    onHandleClick_accInf(){

      BrowserHistory.push('/Account_inf');
          }



    constructor(props) {
        super(props);
       this.state = {
            username: '',
            course: '',
            address: '',
            email: '',
            mobileNumber: '',
            repos: [],
            submitted: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSearch = (user) => {
        console.log(user);
        let url = 'http://localhost:4013/users/userProfile?studentname=' + user
        fetch(url)
            .then(response => response.json()).then((repos) => {
                this.setState({
                    repos: repos
                });
            });
    };


    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { username, address, email, mobileNumber } = this.state;
        this.setState({ submitted: true });
        const profileuser = {
            username: this.state.username,
            address: this.state.address,
            email: this.state.email,
            course: this.state.course,
            mobileNumber: this.state.mobileNumber
        }
        studentProfile(profileuser).then(res => {
            if (username && address && email && mobileNumber) {
                window.alert(`registered successfully`)
                // window.location = '/student';  
            }
        })
    }


    render() {
        const { username, course, address, email, mobileNumber, submitted } = this.state;
        return (
            <div>
                <div className="conatiner">
                    <div className="row">
                        <div className="col-md-11 offset-md-1">
                            <form action="#">
                                {/* <div className="input-group ">
                                    <SearchBar handleSubmit={this.handleSearch} />
                                </div> */}
                            </form>
                        </div>

                        <div className="col-md-3 offset-md-1 ">
                            <h3>Account Information</h3>
                            <form className="form" onSubmit={this.handleSubmit}>
                                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                                    <label htmlFor="studentName"> Name</label>
                                    <input type="text" className="form-control" name="username"
                                        value={this.state.username}
                                        onChange={this.handleChange} />
                                    {submitted && !username &&
                                        <div className="help-block"> Name is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !course ? ' has-error' : '')}>
                                    <label htmlFor="course">Gnaral Information</label>
                                    {/* <a  onClick={this.onHandleClick_accInf} ></a> */}
                                    <select id="myList" name="course" className="form-control"
                                        onChange={this.handleChange} >
                                        <option></option>
                                        <option>PLAN INFORMATION</option>
                                        <option>PRODUCT INFORMATION </option>
                                    </select>
                                </div>
                                <div className={'form-group' + (submitted && !address ? ' has-error' : '')}>
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" name="address" value={this.state.address}
                                        onChange={this.handleChange} />
                                    {submitted && !address &&
                                        <div className="help-block"> required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" value={this.state.email}
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" onChange={this.handleChange} />
                                    {submitted && !email &&
                                        <div className="help-block">Email is required</div>
                                    }
                                </div>
                                <div className={'form-group' + (submitted && !mobileNumber ? ' has-error' : '')}>
                                    <label htmlFor="mobileNumber">Mobile Number</label>
                                    <input type="number" className="form-control" name="mobileNumber"
                                        value={this.state.mobileNumber}
                                        onChange={this.handleChange} />
                                    {submitted && !mobileNumber &&
                                        <div className="help-block">mobile Number is required</div>
                                    }
                                </div>
                                <div className={'form-group'}>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <RepoList repos={this.state.repos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// class SearchBar extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();
//         const text = event.target.text.value;
//         this.props.handleSubmit(text);
//     };

//     render() {
//         return (
//             <div>
//                 <h5>Create new Account</h5>
//                 <form onSubmit={this.handleSubmit}>
//                     <div class="input-group ">
//                         <input name="text" type="text" class="form-control"
//                             placeholder='Enter Name' />
//                         <div>
//                             <button class="btn btn-primary" type="submit">Search</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }



export default UserComponent;