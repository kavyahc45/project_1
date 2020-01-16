import React, { Component } from 'react';
import BrowserHistory from '../../Utils/BrowserHistory';

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
    render() {
        return (
            <div>
                <h2>General Insurance</h2>
                 <select onChange={this.handlechange} name="insurance">
                     <option>Crop Insurance</option>
                     <option>Vehicle Insurance</option>
                 </select>
                 <div><button onClick={this.handleclick}>Submit</button></div>
            </div>
        );
    }
}

export default Generalinsurance;