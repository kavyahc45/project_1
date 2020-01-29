import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar/Navbar';
import Vehicle from './Vehicle';
import Crop from './Crop';
import '../css/Admin.css';


class Admin extends Component {
    
    render() {
        return (
            <div className="url">
             
                <Navbar/>
                <h1>Admin Portal</h1>
            
                <div className="admin_portal">
                  <div><h2 className="vechile_heading">Vehicle Insurance</h2></div>
                  <div><h2>Crop Insurance</h2></div>
               <div ><Vehicle /></div> 
              
              <div><Crop/></div>
            </div>
             </div>
        );
    }
}

export default Admin;