import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

const { REACT_APP_CONTENTFUL_URI, REACT_APP_CONTENTFUL_TOKEN } = process.env;

// eslint-disable-next-line import/prefer-default-export
export const client = new ApolloClient({
  uri: REACT_APP_CONTENTFUL_URI,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${REACT_APP_CONTENTFUL_TOKEN}`,
  },
});
