import React, { Component } from 'react';
import Print from '../Components/Print'
import Printvehl from '../Components/Printvehl';
import '../css/payment.css'


class PrintOut extends Component {
    render() {
        const temp=sessionStorage.getItem('instype');
        return (
            <div className="printurl">
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