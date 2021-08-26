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
const SANDBOX_KEY = process.env.SANDBOX_KEY;
const SANDBOX_SECRET = process.env.SANDBOX_SECRET;

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
    console.log(`JDMA url` , url)
    
    const response = await axios({
      url: DRSIM_BASE_URL + url,
      method: 'get',
      headers: {
        DSIM_KEY: SANDBOX_KEY,
        DSIM_SECRET: SANDBOX_SECRET,
      },
    });
    
    console.log(`JDMA response ${url}` , response.data.res)

    return response.data.res;
  } catch (error) {
    console.log('DRSIM error: ', error);
    return null;
  }
};

const getCountries = async () => {
  const response = await callDRSIM(COUNTRIES_URL);

  const countriesIDs = Object.keys(response);

  const countries = countriesIDs.map((countryID) => {
    const country = {
      drSimID: countryID,
      name: response[countryID],
    };

    return country;
  });
console.log(`JDMA countries` , countries)
  return countries;
};

const getNetworks = async () => {
  const response = await callDRSIM(NETWORKS_URL);

  const countryIDs = Object.keys(response);

  const networks = countryIDs.map((countryDrSimID) => {
    const networkIDs = Object.keys(response[countryDrSimID]);
    const currentCountry = response[countryDrSimID];

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
console.log(`JDMA networks` , networks)
  return networks;
};

const getBrands = async () => {
  const response = await callDRSIM(BRANDS_URL);

  const brandIDs = Object.keys(response);

  const brands = brandIDs.map((brandID) => {
    const currentBrand = response[brandID];

    const brand = {
      name: currentBrand.brand,
      description: currentBrand.desc,
      drSimID: brandID,
    };

    return brand;
  });
console.log(`JDMA brands` , brands)
  return brands;
};

const getDevices = async () => {
  const response = await callDRSIM(DEVICES_URL);

  const brandIDs = Object.keys(response);

  const devices = brandIDs.map((brandDrSimID) => {
    const deviceIDs = Object.keys(response[brandDrSimID]);

    const formattedDevices = deviceIDs.map((deviceID) => {
      const currentDevice = response[brandDrSimID][deviceID];

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
console.log(`JDMA devices` , devices)
  return devices;
};

const getData = async () => {
  try {
    const countries = await getCountries();
    console.log(`JDMA getData countries` , countries)

    const networks = await getNetworks();
    console.log(`JDMA getData networks` , networks)

    const brands = await getBrands();
    console.log(`JDMA getData brands` , brands)

    const devices = await getDevices();
    console.log(`JDMA getData devices` , devices)

    return {
      countries, networks, brands, devices,
    };
  } catch (error) {
    // TODO: Handle Error
    console.error('getData error: ',error);

    return 'ERROR';
  }
};

const insertDataIntoDatabase = async (data, query) => {
  try {
    console.log(`JDMA insertDataIntoDatabase process.env.API_URL` , process.env.API_URL)
    console.log(`JDMA insertDataIntoDatabase data` , data)
    console.log(`JDMA insertDataIntoDatabase query` , query)
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
    console.log(`JDMA graphqlData` , graphqlData)
    const body = {
      graphqlData,
    };
    console.log(`JDMA body` , body)
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
    console.log('This is the event: ',event);
  }

  const data = await getData();

  if (data.countries) {
    addedCountries = await insertDataIntoDatabase(data.countries, createCountries);
    console.log(`JDMA addedCountries` , addedCountries)
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
    addedNetworks = await insertDataIntoDatabase(completeNetworks, createNetworks);
    console.log(`JDMA addedNetworks` , addedNetworks)
  }

  if (data.brands) {
    addedBrands = await insertDataIntoDatabase(data.brands, createBrands);
    console.log(`JDMA addedBrands` , addedBrands)
  }

  if (data.devices && addedBrands) {
    const completeDevices = data.devices.map((device) => {
      const brand = addedBrands.find((tempBrand) => tempBrand.drSimID === device.brandDrSimID);
      return {
        brandID: brand.id,
        ...device,
      };
    });
    addedDevices = await insertDataIntoDatabase(completeDevices, createDevices);
    console.log(`JDMA addedDevices` , addedDevices)
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
console.log(`JDMA body` , body)
  return {
    statusCode: 200,
    body: JSON.stringify(body),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  };
};
