import React, { Component } from 'react';
import imagepolicy from '../Img/imagepolicy.jpeg';

class Navbar extends Component {
    render() {
        return (
            <div>
                {/* <div className="row">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                <img src={imagepolicy}/></div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" style={{background:'white'}}>

                </div>
                <br></br>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" style={{background:'blue'}}>
Home
</div>
<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" style={{background:'blue'}}>
About
</div>
                  
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" style={{background:'blue'}}>
Signin
</div>
<div className="col-xs-5 col-sm-5 col-md-5 col-lg-5" style={{background:'blue'}}>
Login */}
<div className="row">
<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 " >
<div className="bar1"></div>
<div className="bar2"></div>
<div className="bar3"></div>
</div>
<div className="col-xs-1 col-sm-1 col-md-1 col-lg-1" >
<img src={imagepolicy} className="imgpolicy"></img>
</div>
<div className="bar1"></div>
<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
   

</div>
<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
<input type="text" placeholder="search"></input>
</div>
<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
<button href='/Login'>Login</button>
<button href='/Login'>Signup</button>
</div>
</div>

</div>

                 
            
        );
    }
}

export default Navbar;





