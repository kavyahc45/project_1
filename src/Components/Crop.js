import React, { Component } from 'react';
import axios from 'axios';

class Crop extends Component {

    state={
          data:[]
          }
          componentDidMount=()=>{
            debugger;
            axios.get('http://localhost:4002/cinsurencedetiles')
            .then(res => { 
              this.setState({data: res.data});
            });
          }

    render() {
        return (
            
                 <div className="admin">
                     {/* <h2>Crop Insurance</h2> */}
            <table border="2">
            <tr>
              <th>Name</th>
              <th>Cropname</th>
              <th> Area</th>
              <th>Price</th>
              <th>Premium</th>
              
            </tr>
            {this.state.data.map(name =>
            <tr>
              <td>{name.name}</td>
              <td>{name.cropname}</td>
              <td>{name.area}</td>
              <td>{name.price}</td>
              <td>{name.premium}</td>
              
            </tr>   
            )}
          </table>
            </div> 
           
        );
    }
}

export default Crop;