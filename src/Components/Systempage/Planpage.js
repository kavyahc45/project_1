import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
class Planpage extends Component {
    render() {
        return (
            <div>
                 <h2>PLAN INFORMATION </h2>
                 <br></br><br></br>
                 <Button color="primary" id="toggler1" style={{ marginBottom: '1rem' }}>
    Plan specific information
    
    </Button>
  <UncontrolledCollapse toggler="#toggler1 ">
      <Card>
        <CardBody>
        pleaes fill the following required information
        <br></br>
        <div class="row">
      <div class="col">
          <br></br>
      <label>Funding Type</label>
      <select class="mdb-select md-form">
  <option value="" disabled selected>select</option>
  <option value="1">Life incureance</option>
  <option value="2">Health incureance</option>
  <option value="3">property incureance</option>
</select>
      </div>
      <div class="col">
      <label>Plan Type</label>
      <select class="mdb-select md-form">
  <option value="" disabled selected>select</option>
  <option value="1">Life incureance</option>
  </select>
      </div>
    </div>
    </CardBody>
</Card>
</UncontrolledCollapse>
<br></br><br></br>
{/* Next INFORMATION */}

<div>
   <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
    Primary Information
    </Button>
   
    <UncontrolledCollapse toggler="#toggler">
      <Card>
        <CardBody>
        pleaes fill the following required information
        <div class="row">
      <div class="col">
          <br></br>
      <label>Name</label>
        <input type="text" />
      </div>
      <div class="col">
      <label>Origination Reason</label>
      <select class="mdb-select md-form">
  <option value="" disabled selected>select</option>
  <option value="1">Life incureance</option>
  </select>
      </div>
      
    </div>
    <div class="row">
      <div class="col">
      <label>Policy/ Grop Number</label>
        <input type="text" />
      </div>
      <div class="col">
      <label>Billing Type</label>
      <select class="mdb-select md-form">
  <option value="" disabled selected>select</option>
  <option value="1">Life incureance</option>
  <option value="2">Health incureance</option>
  <option value="3">property incureance</option>
</select>
</div>
</div> 
<div class="row">
<div class="col">
      <label>Carrier</label>
        <input type="text" />
      </div>
      <div class="col">

      </div>
    </div>
    </CardBody>
</Card>
</UncontrolledCollapse>
   </div>
   <br></br>
   {/* Next information */}
   <div>
   <Button color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
   Commission Information
    </Button>
   <UncontrolledCollapse toggler="#toggler2">
      <Card>
        <CardBody>
        pleaes fill the following required information
        <div class="row">
      <div class="col">
          <br></br>
      <label>Commission Paid By</label>
      <select class="mdb-select md-form">
  <option value="" disabled selected>select</option>
  <option value="1">Life incureance</option>
  </select>
      </div>
      <div class="col">
      <label>Commission Paid Name</label>
      <select class="mdb-select md-form">
  <option value="" disabled selected>select</option>
  <option value="1">Life incureance</option>
  </select>
      </div>
     </div>
    
<div class="row">
<div class="col">
      <label>Commission Start Date</label>
        <input type="text" placeholder="mm/dd/yyyy"/> 
      </div>
      <div class="col">
 </div>
    </div>
    </CardBody>
</Card>
</UncontrolledCollapse>
   </div>
<br></br><br></br>
   {/* Next Information */}

   <div>
   <Button color="primary" id="toggler3" style={{ marginBottom: '1rem' }}>
  Effective Dates
    </Button>
   <UncontrolledCollapse toggler="#toggler3">
      <Card>
        <CardBody>
        pleaes fill the following required information
        <div class="row">
      <div class="col">
          <br></br>
      <label>Effective Date</label>
        <input type="text" placeholder="mm/dd/yyyy"/> 
      </div>
      <div class="col">
      <label>Renewal Date</label>
      <input type="text" placeholder="mm/dd/yyyy"/> 
      </div>
     </div>
    
<div class="row">
<div class="col">
      <label>Broker Recordof</label>
        <input type="text" placeholder="mm/dd/yyyy"/> 
      </div>
      <div class="col">
 </div>
    </div>
    </CardBody>
</Card>
</UncontrolledCollapse>
   </div>


            </div>
        );
    }
}

export default Planpage;