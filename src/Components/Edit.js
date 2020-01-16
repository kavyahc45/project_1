import React, { Component } from 'react';

import axios from 'axios';

class Edit extends Component {
    
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeName = this.onChangeStudentName.bind(this);
    // this.onChangeemail = this.onChangeCourse.bind(this);
    // this.onChangeAddress = this.onChangeAddress.bind(this);
    // this.onChangeMobileNum = this.onChangeMobile.bind(this);
    this.state = {
      Name: '',
      // email: '',
      // Address: '',
      // MobileNum: '',
      submitted: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const profileuser = {
      Name: this.state.Nname,
      // Address: this.state.Address,
      // email: this.state.email,
      // MobileNum: this.state. MobileNum
    }
    axios.put('http://localhost:4002/users/accountProfile/update/' + this.props.match.params.id, profileuser)
      .then(res => console.log(res.data, "hi"));
    this.setState({
      Name: '',
      // Address: '',
      // email: '',
      // MobileNum: ''
    })
    this.props.history.push('/UserComponent');
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    debugger;
    axios.get('http://localhost:4002/users/edit/' + this.props.match.params.id)

      .then(res => {
        this.setState({
          Name: res.data.Name,
        //  Address: res.data.Address,
        //   email: res.data.email,
        //   MobileNum: res.data.MobileNum,
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeStudentName(e) {
    this.setState({
      Name: e.target.value
    });
  }
 
  // onChangeAddress(e) {
  //   this.setState({
  //     Address: e.target.value
  //   });
  // }
  // onChangeEmail(e) {
  //   this.setState({
  //     email: e.target.value
  //   });
  // }
  // onChangeMobile(e) {
  //   this.setState({
  //     MobileNum: e.target.value
  //   });
  // }

  render() {
    return (
      <div>
        <div className="conatiner">
          <div className="row">
            <form action="#" className=" form col-md-3 offset-md-9">
              <div class="input-group ">
              </div>
            </form>
            <div className="col-md-3 offset-md-1 ">
              <h3>Details</h3>
              <form className="form" onSubmit={this.handleSubmit}>

                <div className={'form-group'}>
                  <label For="studentName">Name</label>
                  <input type="text" className="form-control" value={this.state.studentname}
                    onChange={this.onChangeStudentName} />
                </div>
               
                {/* <div className={'form-group'}>
                  <label For="address">Address</label>
                  <input type="text" className="form-control" value={this.state.address}
                    onChange={this.onChangeAddress} />
                </div>
                <div className={'form-group'}>
                  <label For="email">email</label>
                  <input type="email" className="form-control" value={this.state.email}
                    onChange={this.onChangeEmail} />
                </div>
                <div className={'form-group'}>
                  <label For="mobileNumber">MobileNum</label>
                  <input type="number" className="form-control"
                    value={this.state.mobileNumber}
                    onChange={this.onChangeMobile} />
                </div> */}
                <div className={'form-group'}>
                  <input type="submit" className="btn btn-primary" value="Update" />
                  <button type="submit" className="btn btn-danger text-center">Cancel</button>
                </div>
              </form>
            </div>
            <div className="col-md-4 offset-md-1">
            </div>
          </div>
        </div>
      </div>

    );
  }

}

export default Edit;