import React, { Component } from 'react';
// import BrowerHistory from '../../Utils/BrowerHestory';
import './System.css';


class System extends Component {
//     onClickhandel(){
        
//   BrowerHistory.push('/account');
//     }

    
    render() {
        return (
            <div class="add">
                <h1> Account list page</h1>
                <div >
            <input class="ser" type="text" placeholder="search"></input>
           
                <button  class="cer"><a href="/Account" >Create New Account</a></button>
                
                {/* <button onClick={this.onClickhandel()}>create a new account</button>  */}
                </div>
            </div>
        );
    }
}

export default System;