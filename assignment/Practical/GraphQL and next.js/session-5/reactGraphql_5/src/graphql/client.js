import { ApolloClient, InMemoryCache } from "@apollo/client";
import { SchemaLink } from "@apollo/client/link/schema";
import { makeExecutableSchema } from "@graphql-tools/schema";

import typeDefs from "./schema.graphql?raw";
import { playlists } from "./data";

const resolvers = {
  Query: {
    playlist: (_, { id }) => {
      return playlists.find((playlist) => playlist.id === id);
    },

    playlists: () => {
      return playlists;
    },
  },

  Playlist: {
    songs: (playlist) => {
      return playlist.songs;
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const client = new ApolloClient({
  link: new SchemaLink({
    schema,
  }),

  cache: new InMemoryCache(),
});

export default client;