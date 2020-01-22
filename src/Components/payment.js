import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import  BrowserHistory from '../Utils/BrowserHistory';
import '../css/payment.css'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
      debugger;
    const { token } = await this.props.stripe.createToken({ name: "Name" });
    const response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok)
      alert("Premium payed")
      if (response.ok) this.setState({complete: true});
  }

  onHandleClick() {
    BrowserHistory.push('/gen_inf');
}
printFunction(){
  BrowserHistory.push('/print')
}

  render() {
    if (this.state.complete) return (<h1>Payment Complete</h1>,
    <button onClick={this.printFunction}> print</button>);
    
    
    return (
        <div class="container">
          <div class="row">
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
            <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6">
              <div className="Checkout">
                <p></p>
                <CardElement />
                <button class="pay" onClick={this.submit}>Pay</button>
              </div>
            </div>
            <div class="col-sm-3 col-lg-3 col-md-3 col-xs-3"></div>
          </div>
          <button class="pay" onClick={this.onHandleClick}>Home</button>
          </div>
    );
  }
}

export default injectStripe(CheckoutForm);