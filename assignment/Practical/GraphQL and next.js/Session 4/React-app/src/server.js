const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const songs = [
  {
    id: "1",
    title: "Believer",
    artist: "Imagine Dragons",
  },
  {
    id: "2",
    title: "Perfect",
    artist: "Ed Sheeran",
  },
];


const typeDefs = `
  type Song {
    id: ID!
    title: String!
    artist: String!
  }

  type Query {
    songs: [Song]
  }

  type Mutation {
    addSong(title:String!, artist:String!): Song
  }
`;


const resolvers = {
  Query: {
    songs() {
      return songs;
    },
  },

  Mutation: {
    addSong(_, { title, artist }) {
      const song = {
        id: Date.now().toString(),
        title,
        artist,
      };

      songs.push(song);
      return song;
    },
  },
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
});


startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
}).then(({ url }) => {
  console.log(`Server running at ${url}`);
});