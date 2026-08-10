import React from "react";
import ReactDOM from "react-dom/client";

import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

import { ApolloProvider } from "@apollo/client/react";

import { SchemaLink } from "@apollo/client/link/schema";

import App from "./App.jsx";

import { schema, rootValue } from "./graphql/schema.js";

import "./App.css";

const client = new ApolloClient({
  link: new SchemaLink({
    schema,
    rootValue,
  }),

  cache: new InMemoryCache(),
});

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);