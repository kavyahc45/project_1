import React from "react";
import ReactToPrint from "react-to-print";
import axios from 'axios'
import BrowserHistory from '../Utils/BrowserHistory';

class ComponentToPrint extends React.Component {
constructor(props) {
super(props);
this.state = {
name: [],
cropname:[],
area:[],
// vehiclename:[],
// vehicletype:[],
index:[],
price: [],
premium: [],

}
}

componentDidMount=()=>{
axios.get('http://localhost:4002/cinsurencedetiles')
.then(response => {
this.setState({ index:response.data.length-1 ,
name:response.data.map(data=>data.name),
cropname:response.data.map(data=>data.cropname),
area:response.data.map(data=>data.area),
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
var cropname=this.state.cropname[this.state.index]
var area=this.state.area[this.state.index]
var price=this.state.price[this.state.index]
var premium=this.state.premium[this.state.index]

return (
<div>
<div className="row">
<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
<h1>Name:{name}</h1>
<h1>CropName:{cropname}</h1>
<h1> Area:{area}</h1>
<h1>Price:{price}</h1>
<h1>Premium:{premium}</h1>
</div>
<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
</div>
<button class="pay" onClick={this.onHandleClick}>Home</button>
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














// import React from "react";
// import ReactToPrint from "react-to-print";
// import axios from 'axios';

// class ComponentToPrint extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         user: []
//         };
//         }

//     printform = () => {
//         axios.get('http://localhost:4002/vinsurencedetiles')
//         .then(response => {
//             this.setState({ user: response.data });
//             })
//             .catch(function (error) {
//             console.log(error);
//             })
//             }
//     render() {
//         // var temp=this.state.premium[this.state.index]
//         // console.log(temp)
       
//             return (
//                 <div>
  
//   {this.state.user .map(name => {
// return(
// <table border="5" >
// <tr>
// <td style={{width:"250px",color:"red"}}>{name.name}</td>
// <td style={{width:"250px",color:"red"}}>{name.vehicletype}</td>
// </tr>
// </table>

// )
// }
// )}
//                 </div>
//             )
//         };
//     }
    

//     class Example extends React.Component {
//         render() {
//           return (
//             <div>
//               <ReactToPrint
//                 trigger={() => <a href="#">Print this out!</a>}
//                 content={() => this.componentRef}
//               />
//               <ComponentToPrint ref={el => (this.componentRef = el)} />
//             </div>
//           );
//         }
//       }
      
//       export default Example;



