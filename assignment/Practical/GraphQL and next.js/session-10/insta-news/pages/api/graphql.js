
import {
  buildSchema,
  graphql,
} from "graphql";

const schema = buildSchema(`
  type Post {
    id: ID!
    title: String!
    content: String!
    author: String!
    createdAt: String!
  }

  type Query {
    posts: [Post!]!
  }
`);

const posts = [
  {
    id: "1",
    title: "React 19 Released",
    content:
      "React continues to improve the developer experience with better performance and modern features.",
    author: "Aryan",
    createdAt: "2026-08-01",
  },
  {
    id: "2",
    title: "Next.js SSR Explained",
    content:
      "Server-side rendering allows Next.js to generate HTML on the server for each request.",
    author: "Rahul",
    createdAt: "2026-08-02",
  },
  {
    id: "3",
    title: "AI in Web Development",
    content:
      "Artificial intelligence is becoming an important tool for developers when building modern web applications.",
    author: "Priya",
    createdAt: "2026-08-03",
  },
];

const root = {
  posts: () => posts,
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Only POST requests are allowed",
    });
  }

  try {
    const { query, variables } = req.body;

    const result = await graphql({
      schema,
      source: query,
      rootValue: root,
      variableValues: variables,
    });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      error: "GraphQL request failed",
    });
  }
}

