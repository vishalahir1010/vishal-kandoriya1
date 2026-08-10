import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://demo.saleor.io/graphql" }),
  cache: new InMemoryCache(),
});

export default client;
