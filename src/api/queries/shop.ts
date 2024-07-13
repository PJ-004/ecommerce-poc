import { gql } from 'graphql-request';

export const GET_SHOP = gql`
  query GetShop($id: ID!) {
    getShop(id: $id) {
      id
      name
      description
    }
  }
`;