import React, { Component } from 'react';
import './Gen_inf.css';



class Gen_inform extends Component {
    
    render() {
       
        return (
            <div >
               <h5>General Informatiom</h5>
               <p>please fill the following reqiured information</p>
  {/* <input type=" " placeholder="Type">
  <select  >
<option value="Type" disabled selected>Select</option>
<option>Policy Term</option>
<option>Basic Covers</option>
<option>Additional Benefitsl</option>
</select>
  </input>
<select  class="mdb-select md-form">
<option value="Type" disabled selected>Select</option>
<option>Policy Term</option>
<option>Basic Covers</option>
<option>Additional Benefitsl</option>
</select>

<input type=" " placeholder="Status"></input>
<select  class="mdb-select md-form">
<option value="Type" disabled selected>Active</option>
<option>Policy Term</option>
<option>Basic Covers</option>
<option>Additional Benefitsl</option>
</select>
<br></br>
<br></br>
<input type="text " placeholder="Name"></input>
 */}
 {/* <div>

<br></br>
<select class="mdb-select md-form">
<option value="Type" disabled selected>Select</option>
<option>Policy Term</option>
<option>Session2</option>
</select>
<label class="mdb-main-label">Example label</label>
<br></br>
<label>Status </label>
<br></br>
<select class="mdb-select md-form">
<option value="Type" disabled selected>Active</option>

<option>Policy Term</option>
<option>Session2</option>
</select>
</div>
<div>
<label class="mdb-select md-form">Name</label></div>
<input></input>
<br></br>
<select class="mdb-select md-form">
<option value="Type" disabled selected>Select</option>

<option>Policy Term</option>
<option>Session2</option>
</select> */}
<select class="mdb-select md-form" multiple>
  <option value="" disabled selected>Choose your option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
<label class="mdb-main-label">Example label</label>
<button class="btn-save btn btn-primary btn-sm">Save</button>

            </div>
        );
    }
}

export default Gen_inform;