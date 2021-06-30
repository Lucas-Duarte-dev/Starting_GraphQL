import { ApolloServer, gql } from "apollo-server";

import { v4 as uuid } from "uuid";

// Toda request é POST!!

// Toda requisição bate no mesmo endpoint (/graphql)

// Query -> Obter informações (GET)
// Mutation -> Manipular dados  (POST/PUT/PATCH/DELETE)
// Scalar Types -> String, Int, Boolean, Float e ID (Tipos primitivos, tirando o ID que é um tipo primitivo do
// do Graphql)

// O "!" serve para dizer que tal valor é obrigatório

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    hello: String
    users: [User!]!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World",

    users: () => [
      {
        _id: uuid(),
        name: "Lucas Duarte",
        email: "lucas.duarte@gmail.com",
        active: true,
      },
      {
        _id: uuid(),
        name: "Lucas Duarte1",
        email: "lucas.duarte@gmail.com",
        active: false,
      },
      {
        _id: uuid(),
        name: "Lucas Duarte2",
        email: "lucas.duarte@gmail.com",
        active: false,
      },
    ],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Running ${url}`));
