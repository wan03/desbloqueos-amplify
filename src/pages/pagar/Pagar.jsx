/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements, CardElement, useStripe, useElements,
} from '@stripe/react-stripe-js';
import {
  Box,
  Card,
  Container, Typography,
} from '@mui/material';
import axios from 'axios';
import { environments } from '../../environments/environment';
import '../../assets/formPayment.css';
import Resumen from '../resumen/Resumen';

const env = environments;

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      /* border_color: '#a67106',
      background: '#e4e3e1', */
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: 'red',
      iconColor: 'red',
    },
  },
};

const stripePromise = loadStripe(env.key_public);

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
        const { data } = await axios.post(env.apiStripeUrl, {
          id,
          // eslint-disable-next-line max-len
          amount: 15 * 100, /* en stripe los montos van explesados en centavos. monto en dolares multiplicado por 100 centavos */
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
    <div className="div_payment-cardElement">
      <Resumen />
      <div className="form_payment-cardElement">
        <label className="form-label">Tarjeta</label>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>
      <button disabled={!stripe} onClick={handleSubmit} className="form_payment-btn">
        {loading ? (
          <div>Loading...</div>
        ) : 'Pagar'}
      </button>
    </div>
  );
};

function Pagar() {
  return (
    <Container sx={{
      width: { xs: '100%', sm: '80%' },
    }}
    >
      <Card sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        padding: '5px',
      }}
      >
        <Typography variant="h6" color="primary"> Pagar </Typography>
        <Box sx={{
          display: 'flex',
          gap: '10px',
          padding: '2px',
          justifyContent: 'center',
          width: { xs: '100%', sm: '80%' },
          flexDirection: 'column',
        }}
        >
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </Box>

      </Card>

    </Container>
  );
}

export default Pagar;
