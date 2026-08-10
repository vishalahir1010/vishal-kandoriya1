import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories(first: 10) {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
