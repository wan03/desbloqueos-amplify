/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import axios from 'axios';
import gql from 'graphql-tag';
import { print } from 'graphql';

const DRSIM_BASE_URL = 'https://api.doctorsim.com';
const COUNTRIES_URL = '/countries';
const NETWORKS_URL = '/networks';
const BRANDS_URL = '/brands';
const DEVICES_URL = '/devices';
const DRSIM = 'DRSIM';
const SANDBOX_KEY = '';
const SANDBOX_SECRET = '';

const createCountries = gql`
  mutation BatchCreateCountries(
    $input: [CreateCountryInput!]
  ) {
    createCountries(input: $input) {
        items{
            id
        }      
`;

const createNetworks = gql`
  mutation CreateNetworks(
    $input: [CreateNetworkInput!]
  ) {
    createCountries(input: $input) {
        items{
            id
        }      
`;

const createBrands = gql`
  mutation CreateBrands(
    $input: [CreateBrandInput!]
  ) {
    createCountries(input: $input) {
        items{
            id
        }      
`;

const createDevices = gql`
  mutation CreateDevices(
    $input: [CreateDeviceInput!]
  ) {
    createCountries(input: $input) {
        items{
            id
        }      
`;

const callDRSIM = async (url) => {
  const response = await axios.get({
    baseUrl: DRSIM_BASE_URL,
    url,
    headers: {
      DSIM_KEY: `${SANDBOX_KEY}`,
      DSIM_SECRET: `${SANDBOX_SECRET}`,
    },
  });

  return response;
};

const getCountries = async () => {
  const response = callDRSIM(COUNTRIES_URL);

  const countriesIDs = Object.keys(response.res);

  const countries = countriesIDs.map((countryID) => {
    const country = {
      name: response.res[countryID],
      providers: {
        providerName: DRSIM,
        providerID: countryID,
      },
    };

    return country;
  });

  return countries;
};

const getNetworks = async () => {
  const response = callDRSIM(NETWORKS_URL);

  const countryIDs = Object.keys(response.res);

  const networks = countryIDs.map((countryID) => {
    const networkIDs = Object.keys(response.res[countryID]);
    const currentCountry = response.res[countryID];

    const formattedNetworks = networkIDs.map((networkID) => {
      const network = {
        countryID,
        name: currentCountry[networkID],
        providers: {
          providerName: DRSIM,
          providerID: networkIDs,
        },
      };
      return network;
    });

    return formattedNetworks;
  });

  return networks;
};

const getBrands = async () => {
  const response = callDRSIM(BRANDS_URL);

  const brandIDs = Object.keys(response.res);

  const brands = brandIDs.map((brandID) => {
    const currentBrand = response.res[brandID];

    const brand = {
      name: currentBrand.brand,
      description: currentBrand.desc,
      providers: {
        providerName: DRSIM,
        providerID: brandID,
      },
    };

    return brand;
  });

  return brands;
};

const getDevices = async () => {
  const response = callDRSIM(DEVICES_URL);

  const brandIDs = Object.keys(response.res);

  const devices = brandIDs.map((brandID) => {
    const deviceIDs = Object.keys(response.res[brandID]);

    const formattedDevices = deviceIDs.map((deviceID) => {
      const currentDevice = response.res[brandID][deviceID];

      const device = {
        name: currentDevice.name,
        image: currentDevice.img,
        description: currentDevice.desc,
        providers: {
          providerName: DRSIM,
          providerID: deviceID,
        },
      };
      return device;
    });

    return formattedDevices;
  });

  return devices;
};

const getData = () => {
  try {
    const countries = getCountries();

    const networks = getNetworks();

    const brands = getBrands();

    const devices = getDevices();

    return {
      countries, networks, brands, devices,
    };
  } catch (error) {
    // TODO: Handle Error
    console.error(error);

    return 'ERROR';
  }
};

const insertDataIntoDatabase = async (data, query) => {
  try {
    const graphqlData = await axios({
      url: process.env.API_URL,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_unlockService_GRAPHQLAPIKEYOUTPUT,
      },
      data: {
        query: print(query),
      },
      variables: {
        input: {
          name: 'Hello world!',
          description: 'My first todo',
        },
      },

    });
    const body = {
      graphqlData,
    };
    return {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  } catch (err) {
    console.log('error posting to appsync: ', err);
  }
};

exports.handler = async (event) => {
  // TODO implement

  const data = getData();

  const body = {
    message: 'Successfully inserted data into database!',
  };

  return {
    statusCode: 200,
    body: JSON.stringify(body),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
};
