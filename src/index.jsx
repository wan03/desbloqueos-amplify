import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './shared/apollo/Apollo';
import reportWebVitals from './reportWebVitals';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.min.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap-css-only/css/bootstrap.min.css';
import './shared/mdbreact/css/mdb.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
