/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCountry = /* GraphQL */ `
  query GetCountry($id: ID!) {
    getCountry(id: $id) {
      id
      name
      networks {
        items {
          id
          countryID
          networkID
          createdAt
          updatedAt
        }
        nextToken
      }
      providers {
        items {
          id
          countryID
          providerID
          providerName
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
        name
        networks {
          nextToken
        }
        providers {
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
      name
      countries {
        items {
          id
          countryID
          networkID
          createdAt
          updatedAt
        }
        nextToken
      }
      providers {
        items {
          id
          networkID
          providerID
          providerName
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
export const listNetworks = /* GraphQL */ `
  query ListNetworks(
    $filter: ModelNetworkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNetworks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        countries {
          nextToken
        }
        providers {
          nextToken
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
      name
      description
      devices {
        items {
          id
          brandID
          deviceID
          createdAt
          updatedAt
        }
        nextToken
      }
      providers {
        items {
          id
          brandID
          providerID
          providerName
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
        name
        description
        devices {
          nextToken
        }
        providers {
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
      name
      image
      description
      brands {
        items {
          id
          brandID
          deviceID
          createdAt
          updatedAt
        }
        nextToken
      }
      providers {
        items {
          id
          deviceID
          providerID
          providerName
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
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        description
        brands {
          nextToken
        }
        providers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCountryProvider = /* GraphQL */ `
  query GetCountryProvider($id: ID!) {
    getCountryProvider(id: $id) {
      id
      countryID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const listCountryProviders = /* GraphQL */ `
  query ListCountryProviders(
    $filter: ModelCountryProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCountryProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        countryID
        providerID
        providerName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNetworkProvider = /* GraphQL */ `
  query GetNetworkProvider($id: ID!) {
    getNetworkProvider(id: $id) {
      id
      networkID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const listNetworkProviders = /* GraphQL */ `
  query ListNetworkProviders(
    $filter: ModelNetworkProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNetworkProviders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        networkID
        providerID
        providerName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBrandProvider = /* GraphQL */ `
  query GetBrandProvider($id: ID!) {
    getBrandProvider(id: $id) {
      id
      brandID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const listBrandProviders = /* GraphQL */ `
  query ListBrandProviders(
    $filter: ModelBrandProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrandProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brandID
        providerID
        providerName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDeviceProvider = /* GraphQL */ `
  query GetDeviceProvider($id: ID!) {
    getDeviceProvider(id: $id) {
      id
      deviceID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const listDeviceProviders = /* GraphQL */ `
  query ListDeviceProviders(
    $filter: ModelDeviceProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeviceProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deviceID
        providerID
        providerName
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
