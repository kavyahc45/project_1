import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import SignupPage from './Components/Signup/SignupPage';
import Navbar from './Components/Navbar/Navbar';
import account_inf from './Components/Systempage/Account_inf';
import Productpage from './Components/Systempage/Productpage';
import Planpage from './Components/Systempage/Planpage';
import Account_inf from './Components/Systempage/Account_inf';
import Gallery from './Components/Gallery/Gallery';


import UserComponent from './Components/UserComponent';
import Table from './Components/Table';


function App() {
    return (
        <div className="App">
            <Router>
                <switch>
                    <Route exact path='/' component={SignupPage}></Route>
                 <Route exact path ='/UserComponent' component={UserComponent}></Route>
                     <Route exact path='/Login' component={LoginForm}></Route>
                    <Route exact path='/Navbar' component={Navbar}></Route>
                   <Route exact path ='/Product' component ={Productpage}></Route>
                    <Route exact path ='/plan' component ={Planpage}></Route> 
                    <Route exact path ='/Account_inf' component ={Account_inf}></Route>  
                    <Route exact path ='/Table' component ={Table}></Route>
                  
                    {/* <Route exact path ='/Gallery' component ={Gallery}></Route> */}
                </switch>
            </Router>

        </div>
    );
}

export default App;
