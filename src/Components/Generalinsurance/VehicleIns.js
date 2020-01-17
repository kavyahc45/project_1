import React, { Component } from 'react';
import axios from 'axios';
import { vehicleHandle } from '../../Actions/VehicleAction';
import { connect } from 'react-redux';
import BrowserHistory from '../../Utils/BrowserHistory'

class VehicleIns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            vehicletype:'Two Wheller',
            vehiclename:'',
            price: '',
            index:'',
            premium: [],
            visible:true
        }
    }

    handlechange= (event) =>{
        this.setState({[event.target.name]:event.target.value})
    }

    onHandleClick = (e) => {
        const {name,vehicletype,vehiclename,price,premium}=this.state
        const payload = {name,vehicletype,vehiclename,price,premium}
        this.props.vehicleHandle(payload);
    }
    getUpdate=()=>{
        axios.get('http://localhost:4002/vinsurencedetiles')
        .then(response => {
            this.setState({ index:response.data.length-1 ,premium:response.data.map(data=>data.premium)});
        })
        .catch(function (error) {
            console.log(error);
        })
        this.setState({visible:false})
    }   
    payment = () =>{
        BrowserHistory.push('./checkoutform')
    } 
    render() {
        var temp=this.state.premium[this.state.index]
        console.log(temp)
        return (
            <div>
                 <div id="main-registration-container">
                    <div class="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <h3 className='heading'>Vehicle</h3>
                            <div>
                                <label >Name :</label>
                                <input type="text" name="name" onChange={this.handlechange}  placeholder="Please enter the name" />
                            </div>
                            <div>
                                <label   >Vehicle type :</label>
                                <select name="vehicletype" onChange={this.handlechange}>
                                    <option >Two Wheller </option>
                                    <option>Four Wheller </option>
                                </select>
                            </div>
                            <div>  
                                <label >Vehicle name :</label>
                                <input type="text" name="vehiclename" onChange={this.handlechange}  placeholder="Please enter the area" />
                            </div> 
                            <div>
                                <label >Price :</label>
                                <input type="text" name="price" onChange={this.handlechange}  placeholder="Please enter the product" />
                            </div>
                            <div hidden={this.state.visible}>
                                <label >Premium :</label><b>{temp}</b>

                                {/* <input type="text" name="premium" onChange={this.handlechange} placeholder="Please enter the premium" /> */}
                            </div>
                            <div>
                                <button onMouseOver={this.onHandleClick} hidden={!this.state.visible}onClick={this.getUpdate}>check premium</button>
                                <button hidden={this.state.visible} onClick={this.payment}>Proceed to pay</button>
                            </div>
                        </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                    </div>
                </div>  
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    // const { name, vehicletype,vehiclename,price,premium } = state.VehicleReducer
    // return { name, vehicletype,vehiclename,price,premium }
}

export default connect(mapStateToProps,{vehicleHandle})(VehicleIns)