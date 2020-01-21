import React, { Component } from 'react';
import Nav from '../Navbar/Nav';
import about from './insu_policy.webp';


class HomePage extends Component {

    constructor(){
        super()
          this.state={
            showMe:false
          }
        }
      Operation()
    {
      this.setState({
    showMe:!this.state.showMe
      })
    }

    render() {
        return (
            <div className="home">
               <Nav/>
               {/* <img src={about} className="abtimg"></img> */}
             {
          this.state.showMe?
          <div className="hide">Insurance is a means of protection from financial loss. 
          It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss. An entity which provides insurance is known as an insurer, insurance company, insurance carrier or underwriter.</div>
          :null
        }
        <button className="readmore" onClick={()=>this.Operation()}>What is Insurance ?</button>
        <img src={about} className="abtimg"></img>
            </div>
        );
    }
}

export default HomePage;