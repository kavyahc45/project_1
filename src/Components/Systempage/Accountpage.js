import React, { Component } from 'react';
import BrowerHistory from '../../Utils/BrowerHestory';

class Accountpage extends Component {
  onClickhandel(){
        
    BrowerHistory.push('/Gen_inform');
      }

    render() {
        return (
            <div>
               <h1>Create User Account </h1>             
            </div>
        );
    }
}

export default Accountpage;




