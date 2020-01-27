import React, { Component } from 'react';
import '../../css/Footer.css';
import { SocialIcon } from 'react-social-icons';

class FooterComp extends Component {
    render() {
        return (
            <div>
               <div className="footer">
        <div className="down">@Copyright2020</div>
        <div  className="down">www.OnlineInsurance.com</div>
        <div className="social">
        <SocialIcon url="http://twitter.com/jaketrent" className="icons" />                  
        <SocialIcon url="http://linkedin.com/in/jaketrent" className="icons" /> 
        <SocialIcon url="http://facebook.com/in/jaketrent"  className="icons"/> 
        </div>         
      </div> 
            </div>
        );
    }
}

export default FooterComp;