import React, { Component } from 'react';
import axios from 'axios';

class Vehicle extends Component {

    state={
        data:[]
        }
        componentDidMount=()=>{
          debugger;
          axios.get('http://localhost:4002/vinsurencedetiles')
          .then(res => { 
            this.setState({data: res.data});
          });
        }

    render() {
        return (
            
                  <div className=" adminbg">
         
         <table border="2">
            <tr>
              <th>Name</th>
              <th>Vehicletype</th>
              <th> Vehiclename</th>
              <th>Price</th>
              <th>Premium</th>
            </tr>
            {this.state.data.map(name =>
            <tr>
              <td>{name.name}</td>
              <td>{name.vehicletype}</td>
              <td>{name.vehiclename}</td>
              <td>{name.price}</td>
              <td>{name.premium}</td>

            </tr>   
            )}
          </table>
            </div>
            
        );
    }
}

export default Vehicle;