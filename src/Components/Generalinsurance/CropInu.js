import React, { Component } from 'react';
import { cropHandle } from '../../Actions//cropAction'
import { connect } from 'react-redux';
import axios from 'axios';
import BrowserHistory from '../../Utils/BrowserHistory'
import Navbar from '../Navbar/Navbar';
import '../../css/Vehicle.css';

class CropInu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cropname: 'Paddy',
      area: '',
      index: '',
      price: [],
      premium: [],

      visible: true
    }
  }
  handlechange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onHandleClick = (e) => {
    const { name, cropname, area, price, premium } = this.state
    const payload = { name, cropname, area, price, premium }
    // this.props.cropHandle(payload);

    var temp=0;
    e.preventDefault();

    if (this.state.name.length != 0 && this.state.name.match(/^[A-Za-z]{5,15}$/) && this.state.name != null){
        temp=temp+1;
    }
    else
        this.setState({nerr:"name required"})

    if (this.state.area.length != 0 && this.state.area.match(/^[0-9]{0,9}$/) && this.state.area != null){
         temp=temp+1;
        }
    else
            this.setState({aerr:"area required"})
 
    if(temp==2){
      this.props.cropHandle(payload);
      // this.getUpdate();
    }
    this.getUpdate();
  }
  getUpdate = () => {
    axios.get('http://localhost:4002/cinsurencedetiles')
      .then(response => {
        this.setState({ index: response.data.length - 1, premium: response.data.map(data => data.premium), price: response.data.map(data => data.price) });
      })
      .catch(function (error) {
        console.log(error);
      })
    this.setState({ visible: false })
  }
  payment = () => {
    BrowserHistory.push('./checkoutform')
  }
  render() {
    var premium = this.state.premium[this.state.index]
    var price = this.state.price[this.state.index]

    return (
      <div>
        <Navbar />
        <div id="main-registration-container">
          <div className="image">
            <div class="row  cropinu">
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="vel">
                  <h2 className='heading' >Crop</h2>
                  <div className="form_sigup">
                    <div><label className=""><b>Name :</b></label></div>
                    <div>  <input type="text" name="name" onChange={this.handlechange} placeholder="Please enter the name" />
                      <p className="red" >{this.state.nerr}</p></div>
                     <div> <label className="name" ><b>Crop Name :</b></label></div>
                     <div><select name="cropname" onChange={this.handlechange}>
                      <option>Select</option>
                      <option >Paddy </option>
                      <option >Sugar cane </option>
                      </select> </div>
                     <div >    <label className="name"><b>Area :</b></label></div>
                     <div> <input type="text" name="area" onChange={this.handlechange} placeholder="Please enter the area" />
                      <p className="red" >{this.state.aerr}</p></div>
                     {/* <div> <label> <b>Date</b></label></div>
                            <div> <input type="date" name="area"  /></div> */}
                     <div hidden={this.state.visible}>
                      <label ><b>Price :</b></label>
                      <b>{price}</b>
                      </div>

                      <div hidden={this.state.visible}>
                      <label ><b>Premium :</b></label>
                      <b>{premium}</b>
                     </div>
                     <button onClick={this.onHandleClick} hidden={!this.state.visible}  className="checkname">check premium</button>
                     <button hidden={this.state.visible} onClick={this.payment}>Proceed to pay</button>

                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                  </div>
                </div>
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

export default connect(mapStateToProps, { cropHandle })(CropInu)

