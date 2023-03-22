/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* Amplify Params - DO NOT EDIT

    API_UNLOCKSERVICE_GRAPHQLAPIENDPOINTOUTPUT

    API_UNLOCKSERVICE_GRAPHQLAPIIDOUTPUT

    ENV

    REGION

Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const https = require('https');
const axios = require('axios');

const appsyncUrl = process.env.API_UNLOCKSERVICE_GRAPHQLAPIENDPOINTOUTPUT;
const region = process.env.REGION;
const apiKey = process.env.API_UNLOCKSERVICE_GRAPHQLAPIKEYOUTPUT;
const endpoint = new URL(appsyncUrl).hostname;
const { DRSIM_BASE_URL } = process.env;
const { COUNTRIES_URL } = process.env;
const { NETWORKS_URL } = process.env;
const { BRANDS_URL } = process.env;
const { DEVICES_URL } = process.env;
const { countries } = process.env;
const { networks } = process.env;
const { brands } = process.env;
const { devices } = process.env;
const { ERROR } = process.env;
const { SANDBOX_KEY } = process.env;
const { SANDBOX_SECRET } = process.env;
const expirationTime = Math.floor(Date.now() / 1000 + 604800);

const createCountries = `
mutation BatchCreateCountries($countries: [CreateCountryInput!] = {name: "", drSimID: "", expirationTime: ${expirationTime}}) {
  batchCreateCountries(countries: $countries) {
    id
    drSimID
  }
}
`;

const createNetworks = `
mutation BatchCreateNetworks($networks: [CreateNetworkInput!] = {name: "", countryID: "ID!", drSimID: "", countryDrSimID: "", expirationTime: ${expirationTime}}) {
  batchCreateNetworks(networks: $networks) {
    id
  }
}
`;

const createBrands = `
mutation BatchCreateBrands($brands: [CreateBrandInput!] = {name: "", drSimID: "", description: "", expirationTime: ${expirationTime}}) {
    batchCreateBrands(brands: $brands) {
      id
      drSimID
    }
  }
`;

const createDevices = `
mutation BatchCreateDevices($devices: [CreateDeviceInput!] = {brandID: "ID!", name: "", drSimID: "", image: "", description: "", brandDrSimID: "", expirationTime: ${expirationTime}}) {
  batchCreateDevices(devices: $devices) {
    id
  }
}   
`;

const callDRSIM = async (url) => {
  try {
    const response = await axios({
      url: DRSIM_BASE_URL + url,
      method: 'get',
      headers: {
        DSIM_KEY: SANDBOX_KEY,
        DSIM_SECRET: SANDBOX_SECRET,
      },
    });

    return response.data.res;
  } catch (error) {
    console.error('DRSIM error: ', error);

    return null;
  }
};

const getCountries = async () => {
  const response = await callDRSIM(COUNTRIES_URL);
  const countriesIDs = Object.keys(response);
  const drSimCountries = countriesIDs.map((countryID) => {
    const country = {
      drSimID: countryID,
      name: response[countryID],
      expirationTime,
    };

    return country;
  });

  return drSimCountries;
};

const getNetworks = async () => {
  const response = await callDRSIM(NETWORKS_URL);

  const countryIDs = Object.keys(response);
  const drSimNetworks = countryIDs.map((countryDrSimID) => {
    const networkIDs = Object.keys(response[countryDrSimID]);

    const currentCountry = response[countryDrSimID];

    const formattedNetworks = networkIDs.map((networkID) => {
      const network = {
        countryDrSimID,
        name: currentCountry[networkID],
        drSimID: networkID,
        expirationTime,
      };

      return network;
    });

    return formattedNetworks;
  });

  return drSimNetworks;
};

const getBrands = async () => {
  const response = await callDRSIM(BRANDS_URL);

  const brandIDs = Object.keys(response);

  const drSimBrands = brandIDs.map((brandID) => {
    const currentBrand = response[brandID];

    const brand = {
      name: currentBrand.brand,
      description: currentBrand.desc,
      drSimID: brandID,
      expirationTime,
    };

    return brand;
  });

  return drSimBrands;
};

const getDevices = async () => {
  const isDummyDevice = (data) => data !== '0';

  const response = await callDRSIM(DEVICES_URL);

  const brandIDs = Object.keys(response);

  const drSimDevices = brandIDs.map((brandDrSimID) => {
    const deviceIDs = Object.keys(response[brandDrSimID]);

    const formattedDevices = deviceIDs.map((deviceID) => {
      const currentDevice = response[brandDrSimID][deviceID];

      const device = {
        brandDrSimID,
        name: currentDevice.name,
        image: currentDevice.img,
        description: currentDevice.desc,
        drSimID: deviceID,
        expirationTime,
      };

      return device;
    }).filter((device) => isDummyDevice(device.brandDrSimID));

    return formattedDevices;
  });

  return drSimDevices;
};

const getData = async () => {
  try {
    const [rawCountries, rawNetworks, rawBrands, rawDevices] = await Promise.all(
      [getCountries(), getNetworks(), getBrands(), getDevices()],
    );

    return {
      countries: rawCountries,
      networks: rawNetworks.flat(),
      brands: rawBrands,
      devices: rawDevices.flat(),
    };
  } catch (error) {
    console.error('Error in getData: ', error);

    return ERROR;
  }
};

const splitEvery25 = (list = []) => {
  const result = [];
  let index = 0;

  while (index < list.length) {
    result.push(list.slice(index, index += 25));
  }

  return result;
};

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[index], index, array);
  }
};

const insertDataIntoDatabase = async (data, query, type) => {
  const req = new AWS.HttpRequest(appsyncUrl, region);

  const input = {};
  input[type] = data;

  req.method = 'POST';
  req.path = '/graphql';
  req.headers.host = endpoint;
  req.headers['Content-Type'] = 'application/json';
  req.body = JSON.stringify({
    query,
    variables: input,
  });

  if (apiKey) {
    req.headers['x-api-key'] = apiKey;
  } else {
    const signer = new AWS.Signers.V4(req, 'appsync', true);

    signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
  }

  const response = await new Promise((resolve) => {
    const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
      let tempData = '';

      result.on('data', (chunk) => {
        tempData += chunk;
      });

      result.on('end', () => {
        resolve(JSON.parse(tempData.toString()));
      });
    });

    httpRequest.write(req.body);
    httpRequest.end();
  });

  return response.data;
};

const batchCreate = async ({
  data, mutation, type, fieldName,
}) => {
  const batchData = splitEvery25(data);
  const finalResponse = [];
  const responsePromises = [];

  await asyncForEach(
    batchData,
    async (batch) => {
      const temp = insertDataIntoDatabase(batch, mutation, type);
      responsePromises.push(temp);
    },
  );

  const responseBatch = await Promise.all(responsePromises);

  responseBatch.forEach((batch) => {
    console.log('batch in responseBatch', batch);
    finalResponse.push(...batch[fieldName]);
  });

  return finalResponse;
};

const insertParentID = ({
  parents, children, fieldName, childName,
}) => children.map((child) => {
  const parent = parents.find((tempParent) => tempParent?.drSimID === child?.[childName]);

  return {

    [fieldName]: parent?.id,

    ...child,

  };
}).filter((child) => child[fieldName]);

const prepareChildren = ({
  parents, children, fieldName, childName,
}) => {
  const rawData = {
    parents, children, fieldName, childName,
  };
  const completeData = insertParentID(rawData);

  return completeData;
};

const InsertData = async (data) => {
  if (data === ERROR) {
    return 'There was an error getting data from drSim!';
  }

  const addCountriesPromise = batchCreate({
    data: data.countries, mutation: createCountries, type: countries, fieldName: 'batchCreateCountries',
  });

  const addBrandsPromise = batchCreate({
    data: data.brands, mutation: createBrands, type: brands, fieldName: 'batchCreateBrands',
  });

  const [addedCountries, addedBrands] = await Promise.all(
    [addCountriesPromise, addBrandsPromise],
  );

  const addNetworksPromise = batchCreate({
    data: prepareChildren({
      parents: addedCountries, children: data.networks, fieldName: 'countryID', childName: 'countryDrSimID',
    }),
    mutation: createNetworks,
    type: networks,
    fieldName: 'batchCreateNetworks',
  });

  const addDevicesPromise = batchCreate({
    data: prepareChildren({
      parents: addedBrands, children: data.devices, fieldName: 'brandID', childName: 'brandDrSimID',
    }),
    mutation: createDevices,
    type: devices,
    fieldName: 'batchCreateDevices',
  });

  const [addedNetworks, addedDevices] = await Promise.all(
    [addNetworksPromise, addDevicesPromise],
  );

  if (addedCountries.length && addedNetworks.length
    && addedBrands.length && addedDevices.length) {
    console.log(
      'Final data: ',
      addedCountries,

      addedNetworks,
      addedBrands,

      addedDevices,
    );
    return 'Successfully inserted data into database!';
  }
  return 'There was an error inserting data into database!';
};

exports.handler = async (event) => {
  console.log('This is the event: ', event);

  const data = await getData();
  const body = await InsertData(data);

  console.log('Body: ', body);

  if (body === 'Successfully inserted data into database!') {
    return {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }

  return {
    statusCode: 500,
    body: JSON.stringify(body),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
};
