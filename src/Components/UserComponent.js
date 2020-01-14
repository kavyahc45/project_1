import React, { Component } from 'react';
import axios from 'axios';
import './UserComp.css';
import BrowserHistory from '../Utils/BrowserHistory';
import TableRow from './TableRow';

class UserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          Users: []};
      }
      componentDidMount(){
        
        axios.get('http://localhost:4002/account')
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

      onHandleClick_User() {
        BrowserHistory.push('/Table');
    }

    onHandleClick_Inf() {
      BrowserHistory.push('/Account_inf');
  }

  onHandleClick_product() {
      BrowserHistory.push('/plan');
  }

  onHandleClick_product() {
    BrowserHistory.push('/Product');
}


    render() {
        return (
            <div>
               <h2>Account List</h2>
               <br></br><br></br>
               <div >
                    <input class="src"  type="text" placeholder="search" handleSubmit={this.handleSearch}></input>
                    <button class="cre"  onClick={this.onHandleClick_User}>Create a new account</button>
                </div>
                <br></br><br></br>
                <div>
                  <button class="plan">Action
<br></br>
<select>
  <option></option>
<option class="plan" onClick={this.onHandleClick_Inf}>ACCOUNT INFORMATION</option>
  <option class="plan" onClick={this.onHandleClick_plan}>Craete Plan</option>
  <option class="plan" onClick={this.onHandleClick_product}>Create Prodect</option>
</select>
                  </button>

                </div>
                  {/* <div className="row1">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 schp">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div> */}

           
          <table className="table" style={{ marginTop: 20 }}>
        
            <thead>
              <tr>
                <th className="name1">Name</th>
                <th className="name2">email</th>
                <th  className="name3">Address</th>
                <th className="name4">MobileNum</th>
              <th colSpan="2" className="name5">Edit</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
            </div>
        );
    }
}

export default UserComponent;