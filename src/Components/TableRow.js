import React, { Component } from 'react';
import axios from 'axios';
class TableRow extends Component {


    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        }
        delete() {
 
        axios.delete(`http://localhost:4002/delete/${this.props.obj._id}`)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
        window.location.reload();
        }

    render() {
        return (
            <div>
                 <tr>
          <td>
            {this.props.obj.Name}
          </td>
          {/* <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.Address}
          </td>
          <td>
            {this.props.obj.MobileNum}
          </td> */}
          
          {/* <td>
            <button className="btn btn-primary">Account  Edit</button>
           
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td> */}

          
        </tr>
            </div>
        );
    }
}

export default TableRow;