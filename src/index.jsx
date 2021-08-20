import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from './shared/apollo/Apollo';
import reportWebVitals from './reportWebVitals';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@fortawesome/fontawesome-free/css/all.min.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap-css-only/css/bootstrap.min.css';
import './shared/dist/css/mdb.css';

import App from './App';

// eslint-disable-next-line no-unused-vars
const BUILD_ENV = process.env.REACT_APP_BUILD_ENV || 'any-default-local-build_env';

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
