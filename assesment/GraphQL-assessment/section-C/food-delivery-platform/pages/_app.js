import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client/react";
import client from "@/lib/apollo-client";
import { store } from "@/store/store";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}
