/* Amplify Params - DO NOT EDIT
  ENV
  REGION
Amplify Params - DO NOT EDIT */

const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

const DRSIM_BASE_URL = 'https://api.doctorsim.com';
const COUNTRIES_URL = '/countries';
const NETWORKS_URL = '/networks';
const BRANDS_URL = '/brands';
const DEVICES_URL = '/devices';
const SANDBOX_KEY = '';
const SANDBOX_SECRET = '';

const createCountries = gql`
mutation BatchCreateCountries($countries: [CreateCountryInput!] = {name: "", drSimID: ""}) {
  batchCreateCountries(countries: $countries) {
    drSimID
    id
  }
}
`;

const createNetworks = gql`
mutation BatchCreateNetworks($networks: [CreateNetworkInput!] = {name: "", counrtyID: "ID!", drSimID: ""}) {
  batchCreateNetworks(networks: $networks) {
    id
  }
}
`;

const createBrands = gql`
  mutation BatchCreateBrands($brands: [CreateBrandInput!] = {name: "", drSimID: "", description: ""}) {
    batchCreateBrands(brands: $brands) {
      id
    }
  }
`;

const createDevices = gql`
mutation BatchCreateDevices($Devices: [CreateDeviceInput!] = {brandID: "ID!", name: "", drSimID: "", image: "", description: ""}) {
  batchCreateDevices(Devices: $Devices) {
    id
  }
}   
`;

const callDRSIM = async (url) => {
  try {
    const response = await axios.get({
      baseUrl: DRSIM_BASE_URL,
      url,
      headers: {
        DSIM_KEY: `${SANDBOX_KEY}`,
        DSIM_SECRET: `${SANDBOX_SECRET}`,
      },
    });

    return response;
  } catch (error) {
    console.log('DRSIM error: '.error);
    return null;
  }
};

const getCountries = async () => {
  const response = callDRSIM(COUNTRIES_URL);

  const countriesIDs = Object.keys(response.res);

  const countries = countriesIDs.map((countryID) => {
    const country = {
      drSimID: countryID,
      name: response.res[countryID],
    };

    return country;
  });

  return countries;
};

const getNetworks = async () => {
  const response = callDRSIM(NETWORKS_URL);

  const countryIDs = Object.keys(response.res);

  const networks = countryIDs.map((countryDrSimID) => {
    const networkIDs = Object.keys(response.res[countryDrSimID]);
    const currentCountry = response.res[countryDrSimID];

    const formattedNetworks = networkIDs.map((networkID) => {
      const network = {
        countryDrSimID,
        name: currentCountry[networkID],
        drSimID: networkID,
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
      drSimID: brandID,
    };

    return brand;
  });

  return brands;
};

const getDevices = async () => {
  const response = callDRSIM(DEVICES_URL);

  const brandIDs = Object.keys(response.res);

  const devices = brandIDs.map((brandDrSimID) => {
    const deviceIDs = Object.keys(response.res[brandDrSimID]);

    const formattedDevices = deviceIDs.map((deviceID) => {
      const currentDevice = response.res[brandDrSimID][deviceID];

      const device = {
        brandDrSimID,
        name: currentDevice.name,
        image: currentDevice.img,
        description: currentDevice.desc,
        drSimID: deviceID,
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
        input: { ...data },
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
    return null;
  }
};

exports.handler = async (event) => {
  // TODO implement
  let addedCountries;
  let addedNetworks;
  let addedBrands;
  let addedDevices;
  let body;

  if (event) {
    console.log(event);
  }

  const data = getData();

  if (data.countries) {
    addedCountries = insertDataIntoDatabase(data.countries, createCountries);
  }

  if (data.networks && addedCountries) {
    const completeNetworks = data.networks.map((network) => {
      const country = addedCountries
        .find((tempCountry) => tempCountry.drSimID === network.countryDrSimID);
      return {
        countryID: country.id,
        ...network,
      };
    });
    addedNetworks = insertDataIntoDatabase(completeNetworks, createNetworks);
  }

  if (data.brands) {
    addedBrands = insertDataIntoDatabase(data.brands, createBrands);
  }

  if (data.devices && addedBrands) {
    const completeDevices = data.devices.map((device) => {
      const brand = addedBrands.find((tempBrand) => tempBrand.drSimID === device.brandDrSimID);
      return {
        brandID: brand.id,
        ...device,
      };
    });
    addedDevices = insertDataIntoDatabase(completeDevices, createDevices);
  }

  if (addedCountries && addedNetworks && addedBrands && addedDevices) {
    body = {
      message: 'Successfully inserted data into database!',
    };
  } else {
    body = {
      message: 'There was an error inserting data into database!',
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(body),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
};
