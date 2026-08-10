import {
  useQuery,
  ApolloProvider,
} from "@apollo/client";

import { createApolloClient } from "../lib/apolloClient";
import { GET_USERS } from "../graphql/queries";

export default function Restaurants({ initialCache }) {

  const client = createApolloClient();

  client.cache.restore(initialCache);

  return (
    <ApolloProvider client={client}>
      <RestaurantPage />
    </ApolloProvider>
  );
}

function RestaurantPage() {

  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) {
    return (
      <div className="loading">
        Fetching Restaurants...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        {error.message}
      </div>
    );
  }

  return (
    <div className="container">

      <h1>Restaurant List</h1>

      {data.users.data.map((restaurant) => (

        <div
          key={restaurant.id}
          className="card"
        >

          <h2>{restaurant.name}</h2>

          <p>{restaurant.email}</p>

        </div>

      ))}

    </div>
  );
}

export async function getStaticProps() {

  const client = createApolloClient(true);

  await client.query({
    query: GET_USERS,
  });

  return {

    props: {

      initialCache: client.extract(),

    },

  };
}