import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { vehicleHandle } from '../../Actions/VehicleAction';
import { connect } from 'react-redux';
import BrowserHistory from '../../Utils/BrowserHistory';
import '../../css/Vehicle.css';


class VehicleIns extends Component {
constructor(props) {
super(props);
this.state = {
name: '',
vehicletype: 'Two Wheller',
vehiclename: '',
price: '',
index: '',
premium: [],

nerr: '',
verr: '',
perr: '',

visible: true,
}
}


handlechange = (event) => {
console.log(event.target.value)
this.setState({ [event.target.name]: event.target.value })
}

onHandleClick = (e) => {

var temp=0;
e.preventDefault();

const { name, vehicletype, vehiclename, price, premium } = this.state
const payload = { name, vehicletype, vehiclename, price, premium }
// this.props.vehicleHandle(payload);

if (this.state.name.length != 0 && this.state.name.match(/^[A-Za-z]{5,15}$/) && this.state.name != null){
temp=temp+1;
}
else
this.setState({nerr:"name required"})
if (this.state.vehiclename.length != 0 && this.state.vehiclename.match(/^[A-Za-z]{5,15}$/) && this.state.vehiclename != null){
temp=temp+1;
}
else
this.setState({verr:"vehiclename required"})
if (this.state.price.length != 0 && this.state.price.match(/^[0-9]{4,8}$/) && this.state.price != null){
temp=temp+1;
}
else
this.setState({perr:"price required"})
if(temp==3){
this.props.vehicleHandle(payload);
}
this.getUpdate();
}
// this.setState({[e.target.name]:e.target.value});


getUpdate = () => {
axios.get('http://localhost:4002/vinsurencedetiles')
.then(response => {
this.setState({ index: response.data.length - 1, premium: response.data.map(data => data.premium) });
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
var temp = this.state.premium[this.state.index]
console.log(temp)
return (

<div>
<Navbar />
<div id="main-registration-container ">
<div className="image">
<div class="row main Vehiclemain">
<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 "></div>
<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
<div className="vel">
<h2 className='heading'>Vehicle</h2>
</div>
<div className="form_login">
<div><label className="namename"><b>Name :</b></label></div>
<div><input type="text" name="name" class="namevehicle" onChange={this.handlechange} placeholder="Please enter the name" />
<p className="red" >{this.state.nerr}</p></div>
<div><label className="nametype" ><b>Vehicle type :</b></label></div>
<div><select class="classtype" name="vehicletype" onChange={this.handlechange}>
<option>Select</option>
<option >Two Wheller </option>
<option>Four Wheller </option>
</select></div>
<div><label className="vehiclename"><b>Vehicle name :</b></label></div>
<div> <input type="text" class="vehicleclass" name="vehiclename" onChange={this.handlechange} placeholder="Please enter the vehicle name" />
<p className="red" >{this.state.verr}</p></div>
<div> <label className="pricevalue"><b>Price :</b></label></div>
<div> <input type="text" class="pricess" name="price" onChange={this.handlechange} placeholder="Please enter the price" />
<p className="red" >{this.state.perr}</p></div>
{/* <div> <label ><b>Date</b></label></div>
<div> <input type="date" name="area" /></div> */}
<div hidden={this.state.visible}><label ><b>Premium :</b></label><b>{temp}</b>

{/* {/ <input type="text" name="premium" onChange={this.handlechange} placeholder="Please enter the premium" /> /} */}
</div>
<div>
<button onClick={this.onHandleClick} hidden={!this.state.visible} className="namecheck">check premium</button>
<button hidden={this.state.visible} onClick={this.payment}>Proceed to pay</button>
</div>
<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
<div>
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

export default connect(mapStateToProps, { vehicleHandle })(VehicleIns);



// import React, { Component } from 'react';
// import axios from 'axios';
// import Navbar from '../Navbar/Navbar';
// import { vehicleHandle } from '../../Actions/VehicleAction';
// import { connect } from 'react-redux';
// import BrowserHistory from '../../Utils/BrowserHistory';
// import '../../css/Vehicle.css';


// class VehicleIns extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       vehicletype: 'Two Wheller',
//       vehiclename: '',
//       price: '',
//       index: '',
//       premium: [],

//       nerr: '',
//       verr: '',
//       perr: '',

//       visible: true,
//     }
//   }


//   handlechange = (event) => {
//     console.log(event.target.value)
//     this.setState({ [event.target.name]: event.target.value })

//   }

//   onHandleClick = (e) => {

//     // var temp=0;
//     // e.preventDefault();

//     const { name, vehicletype, vehiclename, price, premium } = this.state
//     const payload = { name, vehicletype, vehiclename, price, premium }
//     this.props.vehicleHandle(payload);

//     // if (this.state.name.length != 0 && this.state.name.match(/^[A-Za-z]{5,15}$/) && this.state.firstname != null){
//     //     temp=temp+1;
//     // }
//     // else
//     //     this.setState({nerr:"name required"})
//     // if (this.state.vehiclename.length != 0 && this.state.vehiclename.match(/^[A-Za-z]{5,15}$/) && this.state.email != null){
//     //     temp=temp+2;
//     // }
//     // else
//     //     this.setState({verr:"vehiclename required"})
//     // if (this.state.price.length != 0 && this.state.price.match(/^[0-9]{10}$/) && this.state.password != null){
//     //     temp=temp+3;
//     // }
//     // else
//     //     this.setState({perr:"price required"})
//     // if(temp==3){
//     // this.props.vehicleHandle(payload);
    
//     // }

//   }

//   //    this.setState({[e.target.name]:e.target.value});


//   getUpdate = () => {
//     axios.get('http://localhost:4002/vinsurencedetiles')
//       .then(response => {
//         this.setState({ index: response.data.length - 1, premium: response.data.map(data => data.premium) });
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//     this.setState({ visible: false })

//   }
//   payment = () => {
//     BrowserHistory.push('./checkoutform')
//   }

//   render() {
//     var temp = this.state.premium[this.state.index]
//     console.log(temp)
//     return (

//       <div>
//         <Navbar />
//         <div id="main-registration-container ">
//           <div className="image">
//             <div class="row main Vehiclemain">
//               <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 "></div>
//               <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
//                 <div className="vel">
//                   <h2 className='heading'>Vehicle</h2>
//                 </div>
//                 <div className="form_login">
//                   <div><label className="namename"><b>Name :</b></label></div>
//                   <div><input type="text" name="name" class="namevehicle" onChange={this.handlechange} placeholder="Please enter the name" />
//                     <p className="red" >{this.state.nerr}</p></div>
//                   <div><label className="nametype" ><b>Vehicle type :</b></label></div>
//                   <div><select class="classtype" name="vehicletype" onChange={this.handlechange}>
//                   <option>Select</option>
//                     <option >Two Wheller </option>
//                     <option>Four Wheller </option>
//                   </select></div>
//                   <div><label className="vehiclename"><b>Vehicle name :</b></label></div>
//                   <div> <input type="text" class="vehicleclass" name="vehiclename" onChange={this.handlechange} placeholder="Please enter the vehicle name" />
//                     <p className="red" >{this.state.verr}</p></div>
//                   <div> <label className="pricevalue"><b>Price :</b></label></div>
//                   <div> <input type="text" class="pricess" name="price" onChange={this.handlechange} placeholder="Please enter the price" />
//                     <p className="red" >{this.state.perr}</p></div>
//                   {/* <div> <label  ><b>Date</b></label></div>
//                             <div> <input type="date" name="area"  /></div> */}
//                   <div hidden={this.state.visible}><label ><b>Premium :</b></label><b>{temp}</b>

//                     {/* <input type="text" name="premium" onChange={this.handlechange} placeholder="Please enter the premium" /> */}
//                   </div>
//                   <div>
//                     <button onMouseOver={this.onHandleClick} hidden={!this.state.visible} onClick={this.getUpdate}  className="namecheck">check premium</button>
//                     <button hidden={this.state.visible} onClick={this.payment}>Proceed to pay</button>
//                   </div>
//                   <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
//                   <div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     );
//   }
// }
// const mapStateToProps = (state) => {
//   // const { name, vehicletype,vehiclename,price,premium } = state.VehicleReducer
//   // return { name, vehicletype,vehiclename,price,premium }
// }

// export default connect(mapStateToProps, { vehicleHandle })(VehicleIns);