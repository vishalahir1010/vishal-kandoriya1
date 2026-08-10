import { gql } from "@apollo/client";

export const GET_MOBILE_RESTAURANTS = gql`
  query GetMobileRestaurants {
    restaurants {
      name
      averageRating
      deliveryFee
    }
  }
`;

export const GET_ADMIN_RESTAURANTS = gql`
  query GetAdminRestaurants {
    restaurants {
      id
      name
      averageRating
      deliveryFee
      ownerName
      ownerPhone
      ownerEmail
      totalOrders
      activeMenuItems
      city
    }
  }
`;