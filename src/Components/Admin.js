import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar/Navbar';
import Vehicle from './Vehicle';
import Crop from './Crop';
import '../css/Admin.css';


class Admin extends Component {
    
    render() {
        return (
            <div>
             
                <Navbar/>
                <h1>Admin Portal</h1>
            
                <div className="admin_portal">
                  <div><h1 className="vechile_heading">vechile insurence</h1></div>
                  <div><h1>Crop insurence</h1></div>
               <div ><Vehicle /></div> 
              
              <div><Crop/></div>
            </div>
             </div>
        );
    }
}

export default Admin;