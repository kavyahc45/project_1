import React, { Component } from 'react';
import Nav from '../Navbar/Nav';

import FooterComp from '../Navbar/FooterComp';


class HomePage extends Component {

  

    render() {
        return (
            <div className="home">
               <Nav/>
          <FooterComp/>
                </div>
        );
    }
}

export default HomePage;