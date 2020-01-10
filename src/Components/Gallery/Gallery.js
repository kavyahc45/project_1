import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import './Gallery.css';


class Gallery extends Component {
    render() {
        return (
            <div  class="color">
                <h2>Gallery</h2>
                <br></br>
                <br></br>
                <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                    Communication and Design Practice
     </Button>
    
 
      
     <div>
  <UncontrolledCollapse toggler="#toggler ">
    
<br></br><br></br>

<div class="gale">
  <input type="checkbox" name="name" value="" ></input>
  <button>
  <select class="mdb-select md-form">
     
  <option value="" disabled selected></option>
  <option value="1">Life incureance</option>
  </select>
  </button>
  Custom Communication 
  </div>
  <br></br><br></br><br></br>
  <biv class="gale">
  <input type="checkbox" name="name" value="" ></input>
  <button>
  <select class="mdb-select md-form">
     
  <option value="" disabled selected></option>
  <option value="1">Life incureance</option>
  </select>
  </button>
  EB Credit System
  </biv>
  <br></br><br></br><br></br>
<div class="gale">
  <input type="checkbox" name="name" value=""></input>
  <button>
  <select class="mdb-select md-form">
     
  <option value="" disabled selected></option>
  <option value="1">Life incureance</option>
  </select>
  </button>
  Who We Are
  </div>
  <br></br><br></br><br></br>
  <div class="gale">
  <input type="checkbox" name="name" value="" ></input>
  <button >
  <select class="mdb-select md-form">
  <option value="" disabled selected></option>
  <option value="1">Life incureance</option>
  </select>
  </button>
  Mediate Risk with Design and a Disaster Plan
  </div>
</UncontrolledCollapse>
         </div>
         <br></br><br></br>
         <button class="build">Add build presentation</button>
            </div>
           
        );
    }
}

export default Gallery;