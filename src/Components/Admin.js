import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar/Navbar';


class Admin extends Component {
    state={
        data:[]
        }
        componentDidMount=()=>{
          debugger;
          axios.get('http://localhost:4002/price')
          .then(res => { 
            this.setState({data: res.data});
          });
        }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="adminbg">
          <h1>Admin Portal</h1>
          <table border="2">
            <tr>
              <th>Name</th>
              <th>Vehicletype</th>
              <th>  Vehiclename</th>
              <th>price</th>
              <th>premium</th>
            </tr>
            {this.state.data.map(name =>
            <tr>
              <td>{name.name}</td>
              <td>{name.Vehicletype}</td>
              <td>{name.Vehiclename}</td>
              <td>{name.price}</td>
              <td>{name.premium}</td>

            </tr>   
            )}
          </table>
          </div>
            </div>
        );
    }
}

export default Admin;