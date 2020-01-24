import React, { Component } from 'react';
import BrowserHistory from '../../Utils/BrowserHistory';
import '../../css/Gen_in.css';
import Navbar from '../Navbar/Navbar';
import logo from './imgdownlogo.png';

class Generalinsurance extends Component {
    state={
        insurance:'Crop Insurance'
    }
    handlechange= (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleclick=()=>{
        switch(this.state.insurance){
            case 'Crop Insurance': BrowserHistory.push('/crop')
            break;
            case 'Vehicle Insurance': BrowserHistory.push('/vehicle')
            break;
        }
    }

    onHandleClick(){
        
        BrowserHistory.push('/');
            }
    

    render() {
        return (
            <div className="background1">
                <Navbar/>
                <img src={logo} className="logoimg1"></img>
                <div>
                <h1 className="Ins">General Insurance</h1>
                 <select onChange={this.handlechange} name="insurance" className="crop">
                     <option>Crop Insurance</option>
                     <option>Vehicle Insurance</option>
                 </select>
                 <div className="sub"><button onClick={this.handleclick} className="sub"><b>Submit</b></button></div>
                 </div>
            </div>
        );
    }
}

export default Generalinsurance;