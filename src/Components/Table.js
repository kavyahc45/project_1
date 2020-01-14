import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import axios from 'axios';
import BrowserHistory from '../Utils/BrowserHistory';
import { connect } from 'react-redux';
import {questionHandle} from '../Actions/Tableaction';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
          Name: '',
          email: '',
          Address: '',
         MobileNum:'',
       
        }
      }
      handleChangeg=(e)=>{
          this.setState({[e.target.name]:e.target.value});
      }
      onChangeName=(e)=> {
          this.setState({
            Name: e.target.value
        });
      }
      onChangeemail=(e)=> {
          this.setState({
            email: e.target.value
        })  
      }
      onChangeAddress=(e)=> {
        this.setState({
            Address: e.target.value
      })  
    }
    onChangeMobileNum=(e)=> {
        this.setState({
            MobileNum: e.target.value
      })  
    }

   
  
    
      onSubmit=(e)=> {
        debugger
          e.preventDefault();
          const payload = {
            Name: this.state.Name,
            email : this.state. email,
            Address: this.state.Address,
            MobileNum: this.state. MobileNum,
           
         
        };
     
          this.props.questionHandle(payload);
          BrowserHistory.push('./UserComponent'); 
      }
    

    render() {
        // const {Name, email, Address,MobileNum } = this.state 
        return (
            <div>
                     <div className="row1">
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 appth">
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
            </div>
            <div style={{ marginTop: 10 }}>
                <form onSubmit={this.onSubmit} className="apptform">
                  <h2>Account</h2>
                  <div>
                    <label>Name :</label>
                      <input 
                        type="text" 
                        className="width" 
                        value={this.state.Name}
                        onChange={this.onChangeName}
                    />
                  </div>
                  <div>
                    <label> email :</label>
                      <input type="text" 
                        className="width"
                        value={this.state.email}
                        onChange={this.onChangeemail}
                      />
                  </div>
                  <div>
                    <label>Address :</label>
                      <input type="text" 
                        className="width"
                        value={this.state.Address}
                        onChange={this.onChangeAddress}
                      />
                  </div>
                  <div>
                    <label>MobileNum :</label>
                      <input type="text" 
                        className="width"
                        value={this.state.MobileNum}
                        onChange={this.onChangeMobileNum}
                      />
                  </div>

                 
                 
                <div className="form-group">
                    <button type="submit" value="send" className="sendbta" onClick={this.onSubmit}>Save</button>
                    
              </div>
                </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    const {Name}=state.UserReduser
    const {email}=state.UserReduser
    const {Address}=state.UserReduser
    const {MobileNum}=state.UserReduser
    
    return {Name, email, Address,MobileNum}
    }

export default connect(mapStateToProps,{questionHandle}) (Table);