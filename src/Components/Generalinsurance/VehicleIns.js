import React, { Component } from 'react';

class VehicleIns extends Component {

  state={
            name: '',
            vehicletype: 'Two Wheller ',
            vehiclename: '',
            price: '',
            premium: ''
            // ferr: '',
            // uerr: '',
            // perr: ''
          
        };

        handlechange= (event) =>{
        
            this.setState({[event.target.name]:event.target.value})
        }

        onHandleClick = () => {
          
            console.log(this.state)
        }
    
    render() {
        return (
            <div>
                 <div id="main-registration-container">
                    <div class="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <h3 className='heading'>Vehicle</h3>
                        <div><label >Name :</label>
                        <input type="text" name="name" onChange={this.handlechange}  placeholder="Please enter the name" /></div>
                        <div><label name="vehicletype" onChange={this.handlechange} >Vehicle type :</label>
                                <select>
                                    <option>Two Wheller </option>
                                    <option>Four Wheller </option>
                                </select></div>
                          <div>  <label >Vehicle name :</label>
                            <input type="text" name="vehiclename" onChange={this.handlechange}  placeholder="Please enter the area" />
                            <div>
                            <label >Price :</label>
                            <input type="text" name="price" onChange={this.handlechange}  placeholder="Please enter the product" /></div>
                            
                            <label >Premium :</label>
                            <input type="text" name="premium" onChange={this.handlechange}  placeholder="Please enter the premium" /></div>
                            <button onClick={this.onHandleClick}>save</button>
                            </div>
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                       
                    </div>
                </div>
              
            </div>
        );
    }
}

export default VehicleIns;