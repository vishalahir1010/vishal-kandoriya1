import { buildSchema } from "graphql";

const typeDefs = `
  type Restaurant {
    id: ID!
    name: String!
    averageRating: Float!
    deliveryFee: Float!
    ownerName: String!
    ownerPhone: String!
    ownerEmail: String!
    totalOrders: Int!
    activeMenuItems: Int!
    city: String!
  }

  type Query {
    restaurants: [Restaurant!]!
  }
`;

const restaurants = [
  {
    id: "1",
    name: "Food Palace",
    averageRating: 4.5,
    deliveryFee: 40,
    ownerName: "Rahul Shah",
    ownerPhone: "9876543210",
    ownerEmail: "rahul@example.com",
    totalOrders: 1250,
    activeMenuItems: 45,
    city: "Ahmedabad",
  },
  {
    id: "2",
    name: "Pizza House",
    averageRating: 4.7,
    deliveryFee: 30,
    ownerName: "Amit Patel",
    ownerPhone: "9876501234",
    ownerEmail: "amit@example.com",
    totalOrders: 2100,
    activeMenuItems: 32,
    city: "Rajkot",
  },
  {
    id: "3",
    name: "Spice Garden",
    averageRating: 4.3,
    deliveryFee: 35,
    ownerName: "Karan Mehta",
    ownerPhone: "9898989898",
    ownerEmail: "karan@example.com",
    totalOrders: 980,
    activeMenuItems: 28,
    city: "Vadodara",
  },
];

const schema = buildSchema(typeDefs);

const rootValue = {
  restaurants: () => restaurants,
};

export { schema, rootValue };