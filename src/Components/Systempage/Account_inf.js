import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import './account_inf.css';
import BrowserHistory from '../../Utils/BrowserHistory';



class Account_inf extends Component {
   
    onHandleClick_Inf() {
        BrowserHistory.push('/UserComponent');
    }

    render() {

       
        return (
            <div class="plaepage">
              

                <h1>ACCOUNT INFORMATION</h1>
                <br></br>
                <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                    Geeral Information
                            </Button>
                <UncontrolledCollapse toggler="#toggler ">
                    <Card>
                        <CardBody>
                            pleaes fill the following required information
        <br></br>
                            <div class="row">
                                <div class="col">
                                    <br></br>
                                    <label> Type</label>
                                    <select class="mdb-select md-form">
                                        <option value="" disabled selected>select</option>
                                        <option value="1">Life incureance</option>
                                        <option value="2">Health incureance</option>
                                        <option value="3">property incureance</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <label>Status</label>
                                    <select class="mdb-select md-form">
                                        <option value="" disabled selected>select</option>
                                        <option value="1">Active</option>
                                        <option value="2">Deactive</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <label>Name</label>
                                    <input type="text" />
                                </div>
                                <div class="col">
                                    <label>Business Type</label>
                                    <select class="mdb-select md-form">
                                        <option value="" disabled selected>select</option>
                                        <option value="1">General Liability Insurance</option>
                                        <option value="2">  Business owner’s policy (BOP)</option>
                                        <option value="2">Commercial Auto Insurance</option>
                                        <option value="2">  Worker’s Compensation</option>
                                    </select>
                                </div>
                            </div>

                        </CardBody>
                    </Card>
                </UncontrolledCollapse>

                <br></br><br></br>

                <Button color="primary" id="toggler1" style={{ marginBottom: '1rem' }}>
                    Location Information
                            </Button>
                <UncontrolledCollapse toggler="#toggler1 ">
                    <Card>
                        <CardBody>
                            pleaes fill the following required information
        <br></br>


                            <div class="row">
                                <div class="col">
                                    <label>Company Name</label>
                                    <input type="text" />
                                </div>
                                <div class="col">
                                    <label>Company Location</label>
                                    <select class="mdb-select md-form">
                                        <option value="" disabled selected>select</option>
                                        <option value="1">Mysore</option>
                                        <option value="2">Mandya  </option>
                                        <option value="2">Bangaluru</option>
                                        <option value="2">k.R.Pete  </option>
                                    </select>
                                </div>
                            </div>

                        </CardBody>
                    </Card>
                </UncontrolledCollapse>

                <br></br><br></br>
                <Button color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
                    Main Address
                            </Button>
                <UncontrolledCollapse toggler="#toggler2 ">
                    <Card>
                        <CardBody>
                            pleaes fill the following required information
        <br></br><br></br>
                            <div class="row">
                                <div class="col">
                                    <br></br>
                                    <label> STRETE</label>
                                    <input type="text" />
                                </div>

                                <div class="col">
                                    <label> STRETE2</label>
                                    <input type="text" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <label>CITY</label>
                                    <input type="text" />
                                </div>
                                <div class="col">
                                    <label>COUNTRY</label>
                                    <select class="mdb-select md-form">
                                        <option value="" disabled selected>select</option>
                                        <option value="2">France	  </option>
                                        <option value="1">India </option>
                                        <option value="2"> Jordan </option>
                                        <option value="1">United States </option>
                                        <option value="2"> South Africa	 </option>
                                        <option value="2">Russia</option>

                                    </select>
                                </div>
                            </div>

                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <br></br><br></br>
                <button class="plan" onClick={this.onHandleClick} >Save</button>
            </div>


        );
    }
}




export default Account_inf;