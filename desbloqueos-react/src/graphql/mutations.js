/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCountry = /* GraphQL */ `
  mutation CreateCountry(
    $input: CreateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    createCountry(input: $input, condition: $condition) {
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
export const updateCountry = /* GraphQL */ `
  mutation UpdateCountry(
    $input: UpdateCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    updateCountry(input: $input, condition: $condition) {
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
export const deleteCountry = /* GraphQL */ `
  mutation DeleteCountry(
    $input: DeleteCountryInput!
    $condition: ModelCountryConditionInput
  ) {
    deleteCountry(input: $input, condition: $condition) {
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
      network {
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
      network {
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
      network {
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
export const updateNetwork = /* GraphQL */ `
  mutation UpdateNetwork(
    $input: UpdateNetworkInput!
    $condition: ModelNetworkConditionInput
  ) {
    updateNetwork(input: $input, condition: $condition) {
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
export const deleteNetwork = /* GraphQL */ `
  mutation DeleteNetwork(
    $input: DeleteNetworkInput!
    $condition: ModelNetworkConditionInput
  ) {
    deleteNetwork(input: $input, condition: $condition) {
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
export const createBrand = /* GraphQL */ `
  mutation CreateBrand(
    $input: CreateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    createBrand(input: $input, condition: $condition) {
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
export const updateBrand = /* GraphQL */ `
  mutation UpdateBrand(
    $input: UpdateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    updateBrand(input: $input, condition: $condition) {
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
export const deleteBrand = /* GraphQL */ `
  mutation DeleteBrand(
    $input: DeleteBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    deleteBrand(input: $input, condition: $condition) {
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
      device {
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
      device {
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
      device {
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
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
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
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
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
export const createCountryProvider = /* GraphQL */ `
  mutation CreateCountryProvider(
    $input: CreateCountryProviderInput!
    $condition: ModelCountryProviderConditionInput
  ) {
    createCountryProvider(input: $input, condition: $condition) {
      id
      countryID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const updateCountryProvider = /* GraphQL */ `
  mutation UpdateCountryProvider(
    $input: UpdateCountryProviderInput!
    $condition: ModelCountryProviderConditionInput
  ) {
    updateCountryProvider(input: $input, condition: $condition) {
      id
      countryID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const deleteCountryProvider = /* GraphQL */ `
  mutation DeleteCountryProvider(
    $input: DeleteCountryProviderInput!
    $condition: ModelCountryProviderConditionInput
  ) {
    deleteCountryProvider(input: $input, condition: $condition) {
      id
      countryID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const createNetworkProvider = /* GraphQL */ `
  mutation CreateNetworkProvider(
    $input: CreateNetworkProviderInput!
    $condition: ModelNetworkProviderConditionInput
  ) {
    createNetworkProvider(input: $input, condition: $condition) {
      id
      networkID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const updateNetworkProvider = /* GraphQL */ `
  mutation UpdateNetworkProvider(
    $input: UpdateNetworkProviderInput!
    $condition: ModelNetworkProviderConditionInput
  ) {
    updateNetworkProvider(input: $input, condition: $condition) {
      id
      networkID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const deleteNetworkProvider = /* GraphQL */ `
  mutation DeleteNetworkProvider(
    $input: DeleteNetworkProviderInput!
    $condition: ModelNetworkProviderConditionInput
  ) {
    deleteNetworkProvider(input: $input, condition: $condition) {
      id
      networkID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const createBrandProvider = /* GraphQL */ `
  mutation CreateBrandProvider(
    $input: CreateBrandProviderInput!
    $condition: ModelBrandProviderConditionInput
  ) {
    createBrandProvider(input: $input, condition: $condition) {
      id
      brandID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const updateBrandProvider = /* GraphQL */ `
  mutation UpdateBrandProvider(
    $input: UpdateBrandProviderInput!
    $condition: ModelBrandProviderConditionInput
  ) {
    updateBrandProvider(input: $input, condition: $condition) {
      id
      brandID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const deleteBrandProvider = /* GraphQL */ `
  mutation DeleteBrandProvider(
    $input: DeleteBrandProviderInput!
    $condition: ModelBrandProviderConditionInput
  ) {
    deleteBrandProvider(input: $input, condition: $condition) {
      id
      brandID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const createDeviceProvider = /* GraphQL */ `
  mutation CreateDeviceProvider(
    $input: CreateDeviceProviderInput!
    $condition: ModelDeviceProviderConditionInput
  ) {
    createDeviceProvider(input: $input, condition: $condition) {
      id
      deviceID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const updateDeviceProvider = /* GraphQL */ `
  mutation UpdateDeviceProvider(
    $input: UpdateDeviceProviderInput!
    $condition: ModelDeviceProviderConditionInput
  ) {
    updateDeviceProvider(input: $input, condition: $condition) {
      id
      deviceID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const deleteDeviceProvider = /* GraphQL */ `
  mutation DeleteDeviceProvider(
    $input: DeleteDeviceProviderInput!
    $condition: ModelDeviceProviderConditionInput
  ) {
    deleteDeviceProvider(input: $input, condition: $condition) {
      id
      deviceID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
