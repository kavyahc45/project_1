import React from "react";
import ReactToPrint from "react-to-print";
import axios from 'axios'
import BrowserHistory from '../Utils/BrowserHistory';

class ComponentToPrint extends React.Component {
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

componentDidMount=()=>{
axios.get('http://localhost:4002/vinsurencedetiles')
.then(response => {
this.setState({ index:response.data.length-1 ,
name:response.data.map(data=>data.name),
vehicletype:response.data.map(data=>data.vehicletype),
vehiclename:response.data.map(data=>data.vehiclename),
premium:response.data.map(data=>data.premium),
price:response.data.map(data=>data.price)});
})
.catch(function (error) {
console.log(error);
})

}

onHandleClick=()=>{
  BrowserHistory.push('/')
}

render() {
var name=this.state.name[this.state.index]
var vehicletype=this.state.vehicletype[this.state.index]
var vehiclename=this.state.vehiclename[this.state.index]
var price=this.state.price[this.state.index]
var premium=this.state.premium[this.state.index]

return (
<div>
<div className="row">
<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
<h1>Name:{name}</h1>
<h1>Vehicletype:{vehicletype}</h1>
<h1> Vehiclename:{vehiclename}</h1>
<h1>Price:{price}</h1>
<h1>Premium:{premium}</h1>
</div>
<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
</div>
<button onClick={this.onHandleClick}>Home</button>
</div>
);
}
}

class Example extends React.Component {
render() {
return (
<div>

<ReactToPrint
trigger={() => <a href="#">Print this out!</a>}
content={() => this.componentRef}
/>
<h1>Billing</h1>
<ComponentToPrint ref={el => (this.componentRef = el)} />

</div>
);
}
}

export default Example;
