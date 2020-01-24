import React, { Component } from 'react';
import { cropHandle } from '../../Actions//cropAction'
import { connect } from 'react-redux';
import axios from 'axios';
import BrowserHistory from '../../Utils/BrowserHistory'
import Navbar from '../Navbar/Navbar';

class CropInu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cropname:'Paddy',
            area:'',
            index:'',
            price: [],
            premium: [],
            visible:true
        }
    }
    handlechange= (event) =>{   
        this.setState({[event.target.name]:event.target.value})
    }

    onHandleClick = (e) => { 
        const {name,cropname,area,price,premium}=this.state
        const payload = {name,cropname,area,price,premium}
        this.props.cropHandle(payload);
    }
    getUpdate=()=>{
        axios.get('http://localhost:4002/cinsurencedetiles')
        .then(response => {
            this.setState({ index:response.data.length-1 ,premium:response.data.map(data=>data.premium),price:response.data.map(data=>data.price)});
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
        var premium=this.state.premium[this.state.index]
        var price=this.state.price[this.state.index]

        return (
            <div>
                <Navbar/>
                <div id="main-registration-container">
                    <div class="row  cropinu">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="vel">
                            <h2 className='heading' >Crop</h2>
                            <div>
                                <label className="name1"><b>Name :</b></label>
                                <input type="text" name="name" onChange={this.handlechange}  placeholder="Please enter the name" />
                            </div>
                            <div>
                                <label className="name2" ><b>Crop Name :</b></label>
                                <select name="cropname" onChange={this.handlechange}>
                                    <option >Paddy </option>
                                    <option >Sugar cane </option>
                                </select>
                            </div>
                            <div >  
                                <label  className="name3"><b>Area :</b></label>
                                <input type="text" name="area" onChange={this.handlechange}  placeholder="Please enter the area" />
                            </div>
                            <div hidden={this.state.visible}> 
                                <label ><b>Price :</b></label>
                                <b>{price}</b>
                            </div>
                            <div hidden={this.state.visible}>
                                <label ><b>Premium :</b></label>
                                <b>{premium}</b>
                            </div>
                            <button onMouseOver={this.onHandleClick} hidden={!this.state.visible}onClick={this.getUpdate} className="name4">check premium</button>
                            <button hidden={this.state.visible} onClick={this.payment}>Proceed to pay</button>
                       
                        
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                        </div>
                    </div>
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

export default connect(mapStateToProps,{cropHandle})(CropInu)

