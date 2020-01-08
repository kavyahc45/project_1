import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Products from './Components/Systempage/Products';
// import Gen_inform from './Components/Systempage/Gen_inform';
import System from './Components/Systempage/System';
import LoginForm from './Components/LoginForm/LoginForm';
import SignupPage from './Components/Signup/SignupPage';
 import Navbar from './Components/Navbar/Navbar';
import Accountpage from './Components/Systempage/Accountpage';
import account_inf from './Components/Systempage/account_inf';


function App() {
  return (
    <div className="App">
      <Router>
     <switch>
     <Route exact path ='/' component={SignupPage}></Route>
     <Route exact path='/Login' component={LoginForm}></Route>
       <Route exact path='/Navbar' component={Navbar}></Route>
       <Route exact path ='/System' component ={System}></Route>
        {/* <Route exact path ='/Account' component ={Accountpage}></Route> */}
      <Route exact path ='/Product' component={Products}></Route> 
      {/* <Route exact patch ='/Gen_inform' component ={Gen_inform}></Route> */}
      {/* <Route exact patch ='/account_inf' component ={account_inf}></Route> */}
       </switch>
      </Router>
     
    </div>
  );
}

export default App;
