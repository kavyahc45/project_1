import React, { Component } from 'react';
import Print from '../Components/Print'
import Printvehl from '../Components/Printvehl';
class PrintOut extends Component {
    render() {
        const temp=sessionStorage.getItem('instype');
        return (
            <div>
                {
                (temp==='Vehicle Insurance') ?
                <Printvehl />:
                <Print/>
            }
                
                
            </div>
        );
    }
}

export default PrintOut;