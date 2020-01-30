import React, { Component } from 'react';
import axios from 'axios';


class Crop extends Component {

  state = {
    data: [],
    search: ''
  }
  componentDidMount = () => {
    debugger;
    axios.get('http://localhost:4002/cinsurencedetiles')
      .then(res => {
        this.setState({ data: res.data });
      });
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value })
  }

  render() {

    var searchString = this.state.search.trim().toLowerCase(), library = this.state.data;
    if (searchString.length > 0) {
      library = library.filter(function (i) {
        return i.name.toLowerCase().match(searchString)
      });
    }

    return (

      <div className="admin">
        {/* <h2>Crop Insurance</h2> */}
        <input type="text" value={this.state.search} onChange={this.handleChange} placeholder="search.."></input><br /><br />
        <table border="2">
          <tr>
            <th>Name</th>
            <th>Cropname</th>
            <th> Area</th>
            <th>Price</th>
            <th>Premium</th>
          </tr>

          {library.map(function (i) {
            return <tr>
              <td>{i.name}</td>
              <td>{i.cropname}</td>
              <td>{i.area}</td>
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

export default Crop;