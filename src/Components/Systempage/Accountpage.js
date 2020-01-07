import React, { Component } from 'react';

class Accountpage extends Component {
    render() {
        return (
            <div>
               <h1>User Account Page</h1>
                <div>
                <table class="table table-bordered">
                <thead> 
                  <tr>   
    <th>Account Name</th>
    <th >Date</th>
    </tr>
    </thead> 
    <tbody>
  <tr>
    <td>Kavya</td>
    <td>2-1-2020</td>
  </tr>
 
  
 </tbody>
</table>
<button > Plan </button>
    <button> Prodect </button>
                </div>
            </div>
        );
    }
}

export default Accountpage;




