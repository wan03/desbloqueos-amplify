/* Amplify Params - DO NOT EDIT
    API_UNLOCKSERVICE_GRAPHQLAPIENDPOINTOUTPUT
    API_UNLOCKSERVICE_GRAPHQLAPIIDOUTPUT
    ENV
    REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const https = require('https');
const axios = require('axios');
const appsyncUrl = process.env['API_UNLOCKSERVICE_GRAPHQLAPIENDPOINTOUTPUT'];
const region = process.env.REGION;
const apiKey = process.env['API_UNLOCKSERVICE_GRAPHQLAPIKEYOUTPUT'];
const endpoint = new URL(appsyncUrl).hostname;

const DRSIM_BASE_URL = 'https://api.doctorsim.com';
const COUNTRIES_URL = '/countries';
const NETWORKS_URL = '/networks';
const BRANDS_URL = '/brands';
const DEVICES_URL = '/devices';
const countries = 'countries';
const networks = 'networks';
const brands = 'brands';
const devices = 'devices';
const SANDBOX_KEY = process.env.SANDBOX_KEY;
const SANDBOX_SECRET = process.env.SANDBOX_SECRET;

const createCountries = `
mutation BatchCreateCountries($countries: [CreateCountryInput!] = {name: "", drSimID: ""}) {
  batchCreateCountries(countries: $countries) {
    id
    drSimID
  }
}
`;

const createNetworks = `
mutation BatchCreateNetworks($networks: [CreateNetworkInput!] = {name: "", countryID: "ID!", drSimID: "", countryDrSimID: ""}) {
  batchCreateNetworks(networks: $networks) {
    id
  }
}
`;

const createBrands = `
mutation BatchCreateBrands($brands: [CreateBrandInput!] = {name: "", drSimID: "", description: ""}) {
    batchCreateBrands(brands: $brands) {
      id
      drSimID
    }
  }
`;

const createDevices = `
mutation BatchCreateDevices($devices: [CreateDeviceInput!] = {brandID: "ID!", name: "", drSimID: "", image: "", description: "", brandDrSimID: ""}) {
  batchCreateDevices(devices: $devices) {
    id
  }
}   
`;

const callDRSIM = async (url) => {
    try {
        const rawResponse = await axios({
            url: DRSIM_BASE_URL + url,
            method: 'get',
            headers: {
                DSIM_KEY: SANDBOX_KEY,
                DSIM_SECRET: SANDBOX_SECRET,
            },
        });

        const response = JSON.parse(rawResponse);

        return response.data.res;
    }
    catch (error) {
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
    
    return brands;
};



const getDevices = async () => {
    const isDummyDevice = (data) => data !== '0'

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
        }).filter((device) => isDummyDevice(device.brandDrSimID));

        return formattedDevices;
    });

    return devices;
};

const getData = async () => {
    try {
        const countries = await getCountries();

        const networks = await getNetworks();

        const brands = await getBrands();

        const devices = await getDevices();

        return {
            countries,
            networks: networks.flat(),
            brands,
            devices: devices.flat(),
        };
    }
    catch (error) {
        // TODO: Handle Error
        console.error('getData error: ', error);

        return 'ERROR';
    }
};

const splitEvery25 = (list = []) => {
    let result = []
    let index = 0;
    while(index < list.length) {
        result.push(list.slice(index, index += 25));
    }
    return result;

}

const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  };

const insertDataIntoDatabase = async (data, query, type) => {
    const req = new AWS.HttpRequest(appsyncUrl, region);

    const input = {}

    input[type] = data

    req.method = "POST";
    req.path = "/graphql";
    req.headers.host = endpoint;
    req.headers["Content-Type"] = "application/json";
    req.body = JSON.stringify({
        query: query,
        variables: input
    });

    if (apiKey) {
        req.headers["x-api-key"] = apiKey;
    }
    else {
        const signer = new AWS.Signers.V4(req, "appsync", true);
        signer.addAuthorization(AWS.config.credentials, AWS.util.date.getDate());
    }

    const response = await new Promise((resolve, reject) => {
        const httpRequest = https.request({ ...req, host: endpoint }, (result) => {
            let data = "";

            result.on("data", (chunk) => {
                data += chunk;
            });

            result.on("end", () => {
                resolve(JSON.parse(data.toString()));
            });
        });

        httpRequest.write(req.body);
        httpRequest.end();
    });

    console.log(`JDMA insertDataintoDatabase response`, response)

    return response.data;

};

const batchCreate = ({data, mutation, type, fieldName}) => {
    const batchData = splitEvery25(data)
    let response = []
        
    await asyncForEach(batchData, async batch => {

        const batchResponse = await insertDataIntoDatabase(batch, mutation, type)
        response.push(...batchResponse?.[fieldName])
    })

    return response;
}

const insertParentID = ({parents, children, fieldName}) => {
    return children.map((child) => {
        const parent = parents.find((tempParent) => tempParent?.drSimID === child?.[fieldName]);
        return {
            [fieldName]: parent?.id,
            ...child,
        };
    }).filter(child => child.fieldName);
}

const InsertData = (data) => {
    let addedCountries = [];
    let addedNetworks = [];
    let addedBrands = []; 
    let addedDevices = [];

    if (data === 'ERROR') {
        return 'There was an error getting data from drSim!'
    }

    if (data.countries) {
        const batchCountries = splitEvery25(data.countries)
        console.log(`JDMA batchCountries`, batchCountries)        

        addedCountries = batchCreate({data: batchCountries, mutation: createCountries, type: countries, fieldName: 'batchCreateCountries'})
        console.log(`JDMA addedCountries`, addedCountries)
    }

    if (data.networks && addedCountries) {

        const rawNetworks = {parents: addedCountries, children: data.networks, fieldName: 'countryID'}

        const completeNetworks = insertParentID(rawNetworks)

        const batchNetworks = splitEvery25(completeNetworks)
        console.log(`JDMA batchNetworks`, batchNetworks)
        
        addedNetworks = batchCreate({data: batchNetworks, mutation: createNetworks, type: networks, fieldName: 'batchCreateNetworks'})
        console.log(`JDMA addedNetworks`, addedNetworks)
    }

    if (data.brands) {

        const batchBrands = splitEvery25(data.brands)
        console.log(`JDMA batchBrands`, batchBrands)


        addedBrands = batchCreate({data: batchBrands, mutation: createBrands, type: brands, fieldName: 'batchCreateBrands'})
        console.log(`JDMA addedBrands`, addedBrands)
    }

    if (data.devices && addedBrands) {

        const rawDevices = {parents: addedBrands, children: data.devices, fieldName: 'brandID'}
        
        const completeDevices = insertParentID(rawDevices)

        const batchDevices = splitEvery25(completeDevices)
        console.log(`JDMA batchDevices`, batchDevices)

        addedDevices = batchCreate({data: batchDevices, mutation: createDevices, type: devices, fieldName: 'batchCreateDevices'})
        console.log(`JDMA addedDevices`, addedDevices)
    }

    if (addedCountries && addedNetworks && addedBrands && addedDevices) {
        return 'Successfully inserted data into database!'
    }
    else {
        return 'There was an error inserting data into database!'
    }


}

exports.handler = async (event) => {

    if (event) {
        console.log('This is the event: ', event);
    }

    const data = await getData();
    const body = InsertData(data);
    
    console.log(`JDMA body`, body)
    return {
        statusCode: 200,
        body: JSON.stringify(body),
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    };
};
