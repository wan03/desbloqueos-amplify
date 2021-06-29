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
          networkID
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
          networkID
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
          networkID
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
          networkID
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
export const createCountryNetwork = /* GraphQL */ `
  mutation CreateCountryNetwork(
    $input: CreateCountryNetworkInput!
    $condition: ModelCountryNetworkConditionInput
  ) {
    createCountryNetwork(input: $input, condition: $condition) {
      id
      countryID
      networkID
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
      network {
        id
        drSimID
        name
        countries {
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
export const updateCountryNetwork = /* GraphQL */ `
  mutation UpdateCountryNetwork(
    $input: UpdateCountryNetworkInput!
    $condition: ModelCountryNetworkConditionInput
  ) {
    updateCountryNetwork(input: $input, condition: $condition) {
      id
      countryID
      networkID
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
      network {
        id
        drSimID
        name
        countries {
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
export const deleteCountryNetwork = /* GraphQL */ `
  mutation DeleteCountryNetwork(
    $input: DeleteCountryNetworkInput!
    $condition: ModelCountryNetworkConditionInput
  ) {
    deleteCountryNetwork(input: $input, condition: $condition) {
      id
      countryID
      networkID
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
      network {
        id
        drSimID
        name
        countries {
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
export const createNetwork = /* GraphQL */ `
  mutation CreateNetwork(
    $input: CreateNetworkInput!
    $condition: ModelNetworkConditionInput
  ) {
    createNetwork(input: $input, condition: $condition) {
      id
      drSimID
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
      drSimID
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
      drSimID
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
          deviceID
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
          deviceID
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
          deviceID
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
export const createBrandDevice = /* GraphQL */ `
  mutation CreateBrandDevice(
    $input: CreateBrandDeviceInput!
    $condition: ModelBrandDeviceConditionInput
  ) {
    createBrandDevice(input: $input, condition: $condition) {
      id
      brandID
      deviceID
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
      device {
        id
        drSimID
        name
        image
        description
        brands {
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
export const updateBrandDevice = /* GraphQL */ `
  mutation UpdateBrandDevice(
    $input: UpdateBrandDeviceInput!
    $condition: ModelBrandDeviceConditionInput
  ) {
    updateBrandDevice(input: $input, condition: $condition) {
      id
      brandID
      deviceID
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
      device {
        id
        drSimID
        name
        image
        description
        brands {
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
export const deleteBrandDevice = /* GraphQL */ `
  mutation DeleteBrandDevice(
    $input: DeleteBrandDeviceInput!
    $condition: ModelBrandDeviceConditionInput
  ) {
    deleteBrandDevice(input: $input, condition: $condition) {
      id
      brandID
      deviceID
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
      device {
        id
        drSimID
        name
        image
        description
        brands {
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
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
      id
      drSimID
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
      drSimID
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
      drSimID
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
      createdAt
      updatedAt
    }
  }
`;
