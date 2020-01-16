import React, { Component } from 'react';
import BrowserHistory from '../../Utils/BrowserHistory';

class CropInu extends Component {
    debugger;
    state={
            name: '',
            cropname: '',
            area: '',
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
        debugger
        console.log(this.state)
    //     var temp=0;
    //     e.preventDefault();
    //     const {name,cropname,area,price,premium}=this.state
    //     const payload = {name,cropname,area,price,premium}
    //     if (this.state.name.length != 0 && this.state.name.match(/^[A-Za-z]{5,15}$/) && this.state.name != null){
    //         temp=temp+1;
    //     }
    //     else
    //         this.setState({ferr:"Cropname please"})
    //     if (this.state.cropname.length != 0 && this.state.cropname.match(/^[A-Za-z]{5,15}$/) && this.state.cropname != null){
    //         temp=temp+2;
    //     }
    //     else
    //         this.setState({uerr:"area is required"})
    //     if (this.state.area.length != 0 && this.state.area.match(/^[A-Za-z]{5,15}$/) && this.state.area != null){
    //         temp=temp+3;
    //     }
    //     else
    //     this.setState({uerr:"price is required"})
    //     if (this.state.price.length != 0 && this.state.price.match(/^[A-Za-z]{5,15}$/) && this.state.price != null){
    //         temp=temp+4;
    //     }
    //     else
    //     this.setState({uerr:"preimum is required"})
    //     if (this.state.preimum.length != 0 && this.preimum.price.match(/^[A-Za-z]{5,15}$/) && this.state.preimum != null){
    //         temp=temp+5;
    //     }
    //     if(temp==6){
    //         this.props.registerHandle(payload);
    //     }
    }

    render() {
        return (
            <div>
                <div id="main-registration-container">
                    <div class="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <h3 className='heading' >Crop</h3>
                        <div><label >Name :</label>
                        <input type="text" name="name" onChange={this.handlechange}  placeholder="Please enter the name" /></div>
                        <div><label name="cropname" onChange={this.handlechange} >Crop Name :</label>
                                <select>
                                    <option>Paddy </option>
                                    <option>Sugar cane </option>
                                </select></div>
                          <div>  <label >Area :</label>
                            <input type="text" name="area" onChange={this.handlechange}  placeholder="Please enter the area" />
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

export default CropInu;