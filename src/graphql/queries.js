/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCountry = /* GraphQL */ `
  query GetCountry($id: ID!) {
    getCountry(id: $id) {
      id
      drSimID
      name
      networks {
        items {
          id
          countryID
          countryDrSimID
          drSimID
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCountrys = /* GraphQL */ `
  query ListCountrys(
    $filter: ModelCountryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCountrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        drSimID
        name
        networks {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNetwork = /* GraphQL */ `
  query GetNetwork($id: ID!) {
    getNetwork(id: $id) {
      id
      countryID
      countryDrSimID
      drSimID
      name
      country {
        id
        drSimID
        name
        networks {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listNetworks = /* GraphQL */ `
  query ListNetworks(
    $filter: ModelNetworkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNetworks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        countryID
        countryDrSimID
        drSimID
        name
        country {
          id
          drSimID
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBrand = /* GraphQL */ `
  query GetBrand($id: ID!) {
    getBrand(id: $id) {
      id
      drSimID
      name
      description
      devices {
        items {
          id
          brandID
          drSimID
          brandDrSimID
          name
          image
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBrands = /* GraphQL */ `
  query ListBrands(
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        drSimID
        name
        description
        devices {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
      id
      brandID
      drSimID
      brandDrSimID
      name
      image
      description
      brand {
        id
        drSimID
        name
        description
        devices {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brandID
        drSimID
        brandDrSimID
        name
        image
        description
        brand {
          id
          drSimID
          name
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
