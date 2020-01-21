import React, { Component } from 'react';
import axios from 'axios';
import ReactToPrint from "react-to-print";
import VehicleIns from '../Components/Generalinsurance/VehicleIns'

class Print extends Component {

    // state={
    //     data:[]
    //     }
    //     componentDidMount=()=>{
    //       debugger;
    //       axios.get('http://localhost:4002/vinsurencedetiles')
    //       .then(res => { 
    //         this.setState({data: res.data});
    //       });
    //     }

    render() {
        return (
            <div>

              <div>
                <ReactToPrint
                        //  trigger={() => <a href="/">Print </a>}
                         content={() =>  this.componentRef}
                />
                 <VehicleIns ref={el => (this.componentRef= el)} />
             </div>

             
            </div>
        );
    }
}

export default Print;