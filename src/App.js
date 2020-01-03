import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import System from './Components/Systempage/System';
import LoginPage from './Components/Login/LoginPage';
import SignupPage from './Components/Signup/SignupPage';
import Accountpage from './Components/Systempage/Accountpage';


function App() {
  return (
    <div className="App">
      <Router>
     
      {/* <Route exact path= '/' component={LoginPage}></Route> */}
      <Route exact path='/' component={Navbar}></Route>
      {/* <Route exact path='/' component={}></Route> */}
       <Route exact path='/System' component={System}></Route> 
       <Route exact path='/System' component={Accountpage}></Route> 
       
       {/* <Route exact path='/' component = {SignupPage}></Route> */}
      </Router>
     
    </div>
  );
}

export default App;
