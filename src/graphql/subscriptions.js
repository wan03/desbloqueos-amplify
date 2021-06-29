/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCountry = /* GraphQL */ `
  subscription OnCreateCountry {
    onCreateCountry {
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
export const onUpdateCountry = /* GraphQL */ `
  subscription OnUpdateCountry {
    onUpdateCountry {
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
export const onDeleteCountry = /* GraphQL */ `
  subscription OnDeleteCountry {
    onDeleteCountry {
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
export const onCreateCountryNetwork = /* GraphQL */ `
  subscription OnCreateCountryNetwork {
    onCreateCountryNetwork {
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
export const onUpdateCountryNetwork = /* GraphQL */ `
  subscription OnUpdateCountryNetwork {
    onUpdateCountryNetwork {
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
export const onDeleteCountryNetwork = /* GraphQL */ `
  subscription OnDeleteCountryNetwork {
    onDeleteCountryNetwork {
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
export const onCreateNetwork = /* GraphQL */ `
  subscription OnCreateNetwork {
    onCreateNetwork {
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
export const onUpdateNetwork = /* GraphQL */ `
  subscription OnUpdateNetwork {
    onUpdateNetwork {
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
export const onDeleteNetwork = /* GraphQL */ `
  subscription OnDeleteNetwork {
    onDeleteNetwork {
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
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand {
    onCreateBrand {
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
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand {
    onUpdateBrand {
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
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand {
    onDeleteBrand {
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
export const onCreateBrandDevice = /* GraphQL */ `
  subscription OnCreateBrandDevice {
    onCreateBrandDevice {
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
export const onUpdateBrandDevice = /* GraphQL */ `
  subscription OnUpdateBrandDevice {
    onUpdateBrandDevice {
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
export const onDeleteBrandDevice = /* GraphQL */ `
  subscription OnDeleteBrandDevice {
    onDeleteBrandDevice {
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
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
