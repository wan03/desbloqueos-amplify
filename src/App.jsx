import React from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './shared/router/Routes';
import Layout from './pages/layout/Layout';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;
