import React, { Component } from 'react';


class System extends Component {
    render() {
        return (
            <div class="add">
                <h1> Account list page</h1>
                <div class="ser">
            <input type="text" placeholder="search"></input>
            </div>
                <br></br>
                <br></br>
                <div class="cer">
                <button><a href="/Accountpage">create a new account</a></button> 
                </div>
            </div>
        );
    }
}

export default System;