import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Redirect, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import SignupPage from './Components/Signup/SignupPage';
import Generalinsurance from './Components/Generalinsurance/Generalinsurance';
import VehicleIns from './Components/Generalinsurance/VehicleIns';
import CropInu from './Components/Generalinsurance/CropInu';
import Checkoutform from './Components/Checkoutform';
import HomePage from './Components/Home/HomePage';
import Printout from './Components/PrintOut'
import Admin from './Components/Admin';
import ForgetPassword from './Components/LoginForm/ForgetPassword';

const PrivateRoute = ({ component: IncomingComponent, ...rest }) => (
    <Route
    {...rest}
    render={props => (  
      (sessionStorage.getItem('authentication')) ? (<IncomingComponent {...props} />) : (
        <Redirect to={{pathname: '/', state: { from: props.location }, }}/>)
    )}
  />
  );

function App() {
    return (
        <div className="App">
            <Router>
                <switch>
                    <Route exact path ='/' component={HomePage}></Route>
                    <Route exact path='/signup' component={SignupPage}></Route>
                     <Route exact path='/Login' component={LoginForm}></Route>
                     <Route exact path='/confirmmail' component={ForgetPassword}></Route>
                     <PrivateRoute exact path='/admin' component={Admin}></PrivateRoute>
                     <PrivateRoute exact path ='/gen_inf' component ={Generalinsurance}></PrivateRoute>
                     <PrivateRoute exact path ='/vehicle' component ={VehicleIns}></PrivateRoute>
                     <PrivateRoute exact path ='/crop' component ={CropInu}></PrivateRoute>
                     <PrivateRoute exact path ='/checkoutform' component={Checkoutform}></PrivateRoute>
                     <PrivateRoute exact path='/print' component={Printout}></PrivateRoute>
                </switch>
            </Router>

        </div>
    );
}

export default App;
