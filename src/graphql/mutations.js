/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const batchCreateCountries = /* GraphQL */ `
  mutation BatchCreateCountries($countries: [CreateCountryInput!]) {
    batchCreateCountries(countries: $countries) {
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
          expirationTime
          createdAt
          updatedAt
        }
        nextToken
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const batchCreateNetworks = /* GraphQL */ `
  mutation BatchCreateNetworks($networks: [CreateNetworkInput!]) {
    batchCreateNetworks(networks: $networks) {
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
        expirationTime
        createdAt
        updatedAt
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const batchCreateBrands = /* GraphQL */ `
  mutation BatchCreateBrands($brands: [CreateBrandInput!]) {
    batchCreateBrands(brands: $brands) {
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
          expirationTime
          createdAt
          updatedAt
        }
        nextToken
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const batchCreateDevices = /* GraphQL */ `
  mutation BatchCreateDevices($devices: [CreateDeviceInput!]) {
    batchCreateDevices(devices: $devices) {
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
        expirationTime
        createdAt
        updatedAt
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const createCountry = /* GraphQL */ `
  mutation CreateCountry(
    $input: CreateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    createCountry(input: $input, condition: $condition) {
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
          expirationTime
          createdAt
          updatedAt
        }
        nextToken
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const updateCountry = /* GraphQL */ `
  mutation UpdateCountry(
    $input: UpdateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    updateCountry(input: $input, condition: $condition) {
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
          expirationTime
          createdAt
          updatedAt
        }
        nextToken
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const deleteCountry = /* GraphQL */ `
  mutation DeleteCountry(
    $input: DeleteCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    deleteCountry(input: $input, condition: $condition) {
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
          expirationTime
          createdAt
          updatedAt
        }
        nextToken
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const createNetwork = /* GraphQL */ `
  mutation CreateNetwork(
    $input: CreateNetworkInput!
    $condition: ModelNetworkConditionInput
  ) {
    createNetwork(input: $input, condition: $condition) {
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
        expirationTime
        createdAt
        updatedAt
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const updateNetwork = /* GraphQL */ `
  mutation UpdateNetwork(
    $input: UpdateNetworkInput!
    $condition: ModelNetworkConditionInput
  ) {
    updateNetwork(input: $input, condition: $condition) {
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
        expirationTime
        createdAt
        updatedAt
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const deleteNetwork = /* GraphQL */ `
  mutation DeleteNetwork(
    $input: DeleteNetworkInput!
    $condition: ModelNetworkConditionInput
  ) {
    deleteNetwork(input: $input, condition: $condition) {
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
        expirationTime
        createdAt
        updatedAt
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const createBrand = /* GraphQL */ `
  mutation CreateBrand(
    $input: CreateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    createBrand(input: $input, condition: $condition) {
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
          expirationTime
          createdAt
          updatedAt
        }
        nextToken
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const updateBrand = /* GraphQL */ `
  mutation UpdateBrand(
    $input: UpdateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    updateBrand(input: $input, condition: $condition) {
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
          expirationTime
          createdAt
          updatedAt
        }
        nextToken
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const deleteBrand = /* GraphQL */ `
  mutation DeleteBrand(
    $input: DeleteBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    deleteBrand(input: $input, condition: $condition) {
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
          expirationTime
          createdAt
          updatedAt
        }
        nextToken
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
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
        expirationTime
        createdAt
        updatedAt
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
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
        expirationTime
        createdAt
        updatedAt
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
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
        expirationTime
        createdAt
        updatedAt
      }
      expirationTime
      createdAt
      updatedAt
    }
  }
`;
