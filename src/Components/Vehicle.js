import React, { Component } from 'react';
import axios from 'axios';
import '../css/Admin.css';

class Vehicle extends Component {

    state={
        data:[],
        search:''
        }
        componentDidMount=()=>{
          debugger;
          axios.get('http://localhost:4002/vinsurencedetiles')
          .then(res => { 
            this.setState({data: res.data});
          });
        }

        handleChange=(e)=>{
          this.setState({search:e.target.value})
          }


    render() {

      var searchString=this.state.search.trim().toLowerCase(), library=this.state.data;
      if(searchString.length>0){
      library=library.filter(function(i){
      return i.name.toLowerCase().match(searchString)
      });
      }

        return (
            
                  <div className=" adminbg">
           <input type="text"  placeholder="search.." value={this.state.search} onChange={this.handleChange }className="search" ></input><br/><br/>
         <table border="2">
            <tr>
              <th>Name</th>
              <th>Vehicletype</th>
              <th> Vehiclename</th>
              <th>Price</th>
              <th>Premium</th>
            </tr>
            {library.map(function(i){
           return <tr>
          <td>{i.name}</td>
           <td>{i.vehicletype}</td>
           <td>{i.vehiclename}</td>
             <td>{i.price}</td>
           <td>{i.premium}</td>
            </tr>
             })
              }    
          </table>
            </div>
            
        );
    }
}

export default Vehicle;