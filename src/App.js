import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
import LoginPage from './Components/Login/LoginPage';


function App() {
  return (
    <div className="App">
      <Router>
     
      <Route exact path= '/' component={LoginPage}></Route>
      {/* <Route exact path='/' component={Navbar}></Route> */}
      </Router>
     
    </div>
  );
}

export default App;
