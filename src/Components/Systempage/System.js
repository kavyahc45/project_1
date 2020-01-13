import React, { Component } from 'react';
import BrowserHistory from '../../Utils/BrowserHistory';
import './System.css';
import { Button } from 'react-bootstrap';


class System extends Component {
    onHandleClick_User() {
        BrowserHistory.push('/UserComponent');
    }


    // onHandleClick_create() {
    //     BrowserHistory.push('/Account_inf');
    // }


    onHandleClick_product() {
        BrowserHistory.push('/Product');
    }


    onHandleClick_plan() {
        BrowserHistory.push('/plan');
    }





    render() {

        return (
            <div class="add">
                <h2> Account list </h2>
                <div >
                    <input class="ser" type="text" placeholder="search" handleSubmit={this.handleSearch}></input>
                    <button class="new" onClick={this.onHandleClick_create} onClick={this.onHandleClick_User}>Create a new account</button>
                </div>
                <br></br>
                <br></br>



                <div>
                    <div>
                        <h4>User Account List</h4>
                        <div >
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Account Name</th>
                                        <th >Date</th>
                                        <th>Action
      <br></br>
                                            <button class="plan">Account Edit</button>
                                            <button class="plan" onClick={this.onHandleClick_plan}>Create Plan </button>
                                            <button class="plan" onClick={this.onHandleClick_product}>Create Prodect </button></th>
                                    </tr>
                                </thead>

                            </table>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
// class SearchBar extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();
//         const text = event.target.text.value;
//         this.props.handleSubmit(text);
//     };

//     render() {
//         return (
//             <div>
//                 <h5>Search</h5>
//                 <form onSubmit={this.handleSubmit}>
//                     <div class="input-group ">
//                         <input name="text" type="text" class="form-control"
//                             placeholder='Enter Name' />
//                         <div>
//                             <button class="btn btn-primary" type="submit">Search</button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

export default System;