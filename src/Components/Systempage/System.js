import React, { Component } from 'react';
import BrowerHistory from '../../Utils/BrowerHestory';
import './System.css';
import { Button } from 'react-bootstrap';


class System extends Component {
  onHandleClick(){
        
  BrowerHistory.push('/Product');
    }

    
    render() {
        return (
            <div class="add">
              <h2> Account list page</h2>
                <div >
            <input class="ser" type="text" placeholder="search"></input>
           
                {/* <button  class="cer"><a href="/Account" >Create New Account</a></button> */}
                
                <button class="new">create a new account</button> 
                </div>
                <br></br>
                <br></br>
                <div>
                <div>
               <h4>User Account List</h4>
                <div >
                <table class="table table-bordered" >
                <thead> 
                  <tr>   
    <th>Account Name</th>
    <th >Date</th>
    <th>Action
      <br></br>
      <button class="plan" onClick={this.onHandleClick}>Account Edit</button>
    <button  class="plan" onClick={this.onHandleClick}>Create Plan </button>
    <button  class="plan"onClick={this.onHandleClick}>Create Prodect </button></th>
    </tr>
    </thead> 
    <tbody>
  <tr>
    <td>Kavya</td>
    <td>2-1-2020</td>
   
    
    
  </tr>
 <tr>
 <td>vandana</td>
 <td>2-1-2020</td>
 </tr>
  <tr>
  <td>Harshitha</td>
  <td>3-1-2020</td>
 
  </tr>

  <tr>
  <td>Divya</td>
  <td>4-1-2020</td>
 
  </tr>
  <tr>
  <td>Mithun</td>
  <td>2-1-2020</td>
 
  </tr>
 </tbody>
</table>
                </div>
            </div>
            </div>
            {/* <button>Next Page</button> */}
            </div>
        );
    }
}

export default System;