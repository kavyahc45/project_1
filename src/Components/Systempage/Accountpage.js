import React, { Component } from 'react';

class Accountpage extends Component {
    render() {
        return (
            <div>
                User Account Page
                <div>
                <table className="acc">
  <tr>
    <th>Account Name</th>
    <th >Date</th>
    
  </tr>
  <tr>
    <td>Kavya</td>
    <td>2-1-2020</td>
  </tr>
 
  <tr>
    <button> Plan </button>
    <button> Prodect </button>
  </tr>
 
</table>
                </div>
            </div>
        );
    }
}

export default Accountpage;