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
export const onCreateNetwork = /* GraphQL */ `
  subscription OnCreateNetwork {
    onCreateNetwork {
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
export const onUpdateNetwork = /* GraphQL */ `
  subscription OnUpdateNetwork {
    onUpdateNetwork {
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
export const onDeleteNetwork = /* GraphQL */ `
  subscription OnDeleteNetwork {
    onDeleteNetwork {
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice {
    onCreateDevice {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice {
    onUpdateDevice {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice {
    onDeleteDevice {
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
