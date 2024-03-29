import { gql } from '@apollo/client';

export const getInicio = gql`
query GetInicio($id: String!) {
  inicio (id: $id) {
    servicioTitle
    whyUsTitle
    serviciosCollection {
      items {
        sys {
          id
        }
        title
        text
        buttontext
        buttonhref
      }
    }
    whyUsReasonsCollection {
      items {
        sys {
          id
        }
        title
        text
      }
    }  
  }
}
`;

export const getAcerca = gql`
query GetAcerca($id: String!) {
  inicio (id: $id) {
    servicioTitle
    whyUsTitle
    serviciosCollection {
      items {
        title
        text
        buttontext
        buttonhref
      }
    }
    whyUsReasonsCollection {
      items {
        title
        text
      }
    }  
  }
}
`;
