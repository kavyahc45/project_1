import React from "react";
import ReactToPrint from "react-to-print";
import axios from 'axios';

class ComponentToPrint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        user: []
        };
        }

    printform = () => {
        axios.get('http://localhost:4002/vinsurencedetiles')
        .then(response => {
            this.setState({ user: response.data });
            })
            .catch(function (error) {
            console.log(error);
            })
            }
    render() {
        // var temp=this.state.premium[this.state.index]
        // console.log(temp)
       
            return (
                <div>
  
  {this.state.user .map(name => {
return(
<table border="5" >
<tr>
<td style={{width:"250px",color:"red"}}>{name.name}</td>
<td style={{width:"250px",color:"red"}}>{name.vehicletype}</td>
</tr>
</table>

)
}
)}
                </div>
            )
        };
    }
    

    class Example extends React.Component {
        render() {
          return (
            <div>
              <ReactToPrint
                trigger={() => <a href="#">Print this out!</a>}
                content={() => this.componentRef}
              />
              <ComponentToPrint ref={el => (this.componentRef = el)} />
            </div>
          );
        }
      }
      
      export default Example;



// import React, { Component } from 'react';
// import axios from 'axios'
// import ReactToPrint from "react-to-print";

// class Print extends Component {
// constructor(props) {
// super(props);
// this.state = {
// user: []
// };
// }
// componentDidMount(){
// axios.get('http://localhost:4002/vinsurencedetiles')
// .then(response => {
// this.setState({ user: response.data });
// })
// .catch(function (error) {
// console.log(error);
// })
// }
// render() {
// return (
// <div>

// {this.state.user .map(name => {
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

// </div>
// );
// }
// }



// export default Print;
