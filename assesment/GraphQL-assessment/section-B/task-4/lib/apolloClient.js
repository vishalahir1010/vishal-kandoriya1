import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

export const createApolloClient = (ssrMode = false) => {
  return new ApolloClient({
    ssrMode,

    link: new HttpLink({
      uri: "https://graphqlzero.almansi.me/api",
    }),

    cache: new InMemoryCache(),
  });
};