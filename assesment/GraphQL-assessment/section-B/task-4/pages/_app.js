import "../styles/globals.css";

import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "../lib/apolloClient";

const client = createApolloClient();

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}