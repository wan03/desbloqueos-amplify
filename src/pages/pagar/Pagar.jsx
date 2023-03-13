/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements, CardElement, useStripe, useElements,
} from '@stripe/react-stripe-js';
import {
  Container, Typography,
} from '@mui/material';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51MkaXICXb1FSA7FjQkCaO2V5MFLuhvmEHflE8AnBVI1l7aZWknTtqAKSlwybqIrxy3jfHkdRZbmWoXDjuDJsnr8p00YP3V819d');

// eslint-disable-next-line arrow-body-style
const CheckoutForm = () => {
  const stripe = useStripe();
  const element = useElements();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: element.getElement(CardElement),
    });
    setLoading(true);
    if (!error) {
      console.log(paymentMethod);
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post('http://localhost:3001/stripe/checkout', {
          id,
          amount: 100,
        });
        console.log(data);
        element.getElement(CardElement).clear();
      } catch (er) {
        console.log(er);
      }
      setLoading(false);
    } else {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button disabled={!stripe}>
        {loading ? (
          <div>Loading...</div>
        ) : 'Pagar'}
      </button>
    </form>
  );
};

function Pagar() {
  return (
    <Container sx={{
      width: { xs: '100%', sm: '80%' },
    }}
    >

      <Typography variant="h6"> Pasarela de Pago </Typography>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>

    </Container>
  );
}

export default Pagar;
