import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import System from './Components/Systempage/System';
import LoginForm from './Components/LoginForm/LoginForm';
import SignupPage from './Components/Signup/SignupPage';
 import Navbar from './Components/Navbar/Navbar';
import account_inf from './Components/Systempage/Account_inf';
import Productpage from './Components/Systempage/Productpage';
import Planpage from './Components/Systempage/Planpage';
import Account_inf from './Components/Systempage/Account_inf';
import Gallery from './Components/Gallery/Gallery';
import StudentComponent from './Components/StudentComponent';
import Edit from './Components/Edit';
function App() {
  return (
    <div className="App">
      <Router>
     <switch>
     {/* <Route exact path ='/' component={SignupPage}></Route> */}
     <Route exact path='/student' component={StudentComponent}></Route>
     
{/* <Route exact path='/student/created' component={StudentComponent}></Route>
<Route exact path='/student/edit/:id' component={Edit}></Route> */}
      {/* <Route exact path='/Login' component={LoginForm}></Route> */}
  {/* <Route exact path='/Navbar' component={Navbar}></Route>  */}
       {/* <Route exact path ='/' component ={System}></Route>   */}
        {/* {/* <Route exact patch ='/Product' component ={Productpage}></Route> */}
      {/* <Route exact patch ='/plan' component ={Planpage}></Route>  */}
     {/* <Route exact patch ='/' component ={Account_inf}></Route>   */}
     {/* <Route exact patch ='/Gallery' component ={Gallery}></Route> */}
       </switch> 
      </Router>
     
    </div>
  );
}

export default App;
