import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import PaymentForm from './payment'
class Checkoutform extends Component{
    render() {
   return(
        <div>
             <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <div className="example">
            <Elements>
            <PaymentForm />
            </Elements>
          </div>
         </StripeProvider>
       </div>
   )
  }
} 
export default Checkoutform;