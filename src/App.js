import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
// import Products from './Components/Systempage/Products';
import Gen_inform from './Components/Systempage/Gen_inform';
// import System from './Components/Systempage/System';
// import LoginForm from './Components/LoginForm/LoginForm';
// import SignupPage from './Components/Signup/SignupPage';
//  import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
     <switch>
      
       {/* <Route exact path='/' component={Navbar}></Route> */}
      {/* <Route exact path ='/' component={Products}></Route> */}
      <Route exact patch ='/' component ={Gen_inform}></Route>
       {/* <Route exact path='/' component={LoginForm}></Route> */}
       {/* <Route exact path ='/Login' component={SignupPage}></Route> */}
       {/* <Route exact path ='/' component ={System}></Route> */}
      </switch>
      </Router>
     
    </div>
  );
}

export default App;
