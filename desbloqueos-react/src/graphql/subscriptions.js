/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCountry = /* GraphQL */ `
  subscription OnCreateCountry {
    onCreateCountry {
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
export const onUpdateCountry = /* GraphQL */ `
  subscription OnUpdateCountry {
    onUpdateCountry {
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
export const onDeleteCountry = /* GraphQL */ `
  subscription OnDeleteCountry {
    onDeleteCountry {
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
export const onCreateCountryNetwork = /* GraphQL */ `
  subscription OnCreateCountryNetwork {
    onCreateCountryNetwork {
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
export const onUpdateCountryNetwork = /* GraphQL */ `
  subscription OnUpdateCountryNetwork {
    onUpdateCountryNetwork {
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
export const onDeleteCountryNetwork = /* GraphQL */ `
  subscription OnDeleteCountryNetwork {
    onDeleteCountryNetwork {
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
export const onCreateNetwork = /* GraphQL */ `
  subscription OnCreateNetwork {
    onCreateNetwork {
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
export const onUpdateNetwork = /* GraphQL */ `
  subscription OnUpdateNetwork {
    onUpdateNetwork {
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
export const onDeleteNetwork = /* GraphQL */ `
  subscription OnDeleteNetwork {
    onDeleteNetwork {
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
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand {
    onCreateBrand {
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
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand {
    onUpdateBrand {
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
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand {
    onDeleteBrand {
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
export const onCreateBrandDevice = /* GraphQL */ `
  subscription OnCreateBrandDevice {
    onCreateBrandDevice {
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
export const onUpdateBrandDevice = /* GraphQL */ `
  subscription OnUpdateBrandDevice {
    onUpdateBrandDevice {
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
export const onDeleteBrandDevice = /* GraphQL */ `
  subscription OnDeleteBrandDevice {
    onDeleteBrandDevice {
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
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
export const onCreateCountryProvider = /* GraphQL */ `
  subscription OnCreateCountryProvider {
    onCreateCountryProvider {
      id
      countryID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCountryProvider = /* GraphQL */ `
  subscription OnUpdateCountryProvider {
    onUpdateCountryProvider {
      id
      countryID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCountryProvider = /* GraphQL */ `
  subscription OnDeleteCountryProvider {
    onDeleteCountryProvider {
      id
      countryID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNetworkProvider = /* GraphQL */ `
  subscription OnCreateNetworkProvider {
    onCreateNetworkProvider {
      id
      networkID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNetworkProvider = /* GraphQL */ `
  subscription OnUpdateNetworkProvider {
    onUpdateNetworkProvider {
      id
      networkID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNetworkProvider = /* GraphQL */ `
  subscription OnDeleteNetworkProvider {
    onDeleteNetworkProvider {
      id
      networkID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBrandProvider = /* GraphQL */ `
  subscription OnCreateBrandProvider {
    onCreateBrandProvider {
      id
      brandID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBrandProvider = /* GraphQL */ `
  subscription OnUpdateBrandProvider {
    onUpdateBrandProvider {
      id
      brandID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBrandProvider = /* GraphQL */ `
  subscription OnDeleteBrandProvider {
    onDeleteBrandProvider {
      id
      brandID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDeviceProvider = /* GraphQL */ `
  subscription OnCreateDeviceProvider {
    onCreateDeviceProvider {
      id
      deviceID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDeviceProvider = /* GraphQL */ `
  subscription OnUpdateDeviceProvider {
    onUpdateDeviceProvider {
      id
      deviceID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDeviceProvider = /* GraphQL */ `
  subscription OnDeleteDeviceProvider {
    onDeleteDeviceProvider {
      id
      deviceID
      providerID
      providerName
      createdAt
      updatedAt
    }
  }
`;
