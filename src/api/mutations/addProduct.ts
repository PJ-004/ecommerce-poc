import { gql } from 'graphql-request';

export const ADD_PRODUCT = gql`
  mutation AddProduct(name: $name, price: $price) {
    name,
    price
  }
`;