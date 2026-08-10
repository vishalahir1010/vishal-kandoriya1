import { gql } from "@apollo/client";

export const GET_RESTAURANTS = gql`
  query GetRestaurants {
    restaurants {
      id
      name
      cuisine
    }
  }
`;

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      image
    }
  }
`;