import { ApolloServer, gql } from "apollo-server";

// Toda request é POST!!

// Toda requisição bate no mesmo endpoint (/graphql)

// Query -> Obter informações (GET)
// Mutation -> Manipular dados  (POST/PUT/PATCH/DELETE)
// Scalar Types -> String, Int, Boolean, Float e ID (Tipos primitivos, tirando o ID que é um tipo primitivo do
// do Graphql)

const typeDefs = gql`
  type Query {

  }
`;

const resolvers = {};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Running ${url}`));
