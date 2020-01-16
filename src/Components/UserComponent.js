import React, { Component } from 'react';
import axios from 'axios';
import './UserComp.css';
import BrowserHistory from '../Utils/BrowserHistory';
import TableRow from './TableRow';
// import FilterResults from 'react-filter-search';

class UserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          Users: []};
      }
      componentDidMount(){
        
        axios.get('http://localhost:4002/account')
          .then(response => {
            
            this.setState({ Users: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      tabRow(){
        return this.state.Users.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
      }

      onHandleClick_User() {
        BrowserHistory.push('./Table');
    }

    onHandleClick_Inf() {
      BrowserHistory.push('./Account_inf');
  }

  onHandleClick_product() {
      BrowserHistory.push('./plan');
  }

  onHandleClick_product() {
    BrowserHistory.push('./Product');
}


    render() {
        return (
            <div>
               <h2>Account List</h2>
               <br></br><br></br>
               <div >
                 {/* <div>
               <Search handleSubmit={this.handleSearch} />
               <input type="text"  onChange={this.handleChange } placeholder='Enter Name' /></div> */}
                    <input class="src"  type="text" placeholder="search" handleSubmit={this.handleSearch}></input>
                    <button class="cre"  onClick={this.onHandleClick_User}>Create a new account</button>
                </div>
                <br></br><br></br>
                <div>
                  <button class="plan">Action
<br></br>
<select onClick={this.onHandleClick_Inf}>
  {/* <option></option> */}
<option class="plan" >ACCOUNT INFORMATION</option>
  <option class="plan" >CREATE PLAN</option>
  <option class="plan" >CREATE PRODUCT</option>
</select>
                  </button>

                </div>
                  {/* <div className="row1">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 schp">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div> */}



          <table className="table" style={{ marginTop: 20 }}>
        
        
            <thead>
              <tr>
                <th  className="name1">Name</th>
                {/* <th className="name2">email</th>
                <th  className="name3">Address</th>
                <th className="name4">MobileNum</th>
              <th colSpan="2" className="name5">Edit</th> */}
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
            </div>
        );
    }
}



 
// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
     
//     };
//   }
//   componentWillMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => this.setState({ data: json }));
//   }
//   handleChange = event => {
    
//     this.setState({  });
//   };
//   render() {
   
//     return (
//       <div>
//         {/* <input type="text" value={value} onChange={this.handleChange} /> */}
//         <SearchResults
        
//           renderResults={results => (
//             <div>
//               {results.map(el => (
//                 <div>
//                   {/* <span>{el.name}</span>
//                   <span>{el.email}</span> */}

                  
//                 </div>
//               ))}
//             </div>
//           )}
//         />
//       </div>
//     );
//   }
// }

export default UserComponent;