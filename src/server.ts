import { startServer } from "./startServer";
import { v4 as uuid } from "uuid";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

// Toda request é POST!!

// Toda requisição bate no mesmo endpoint (/graphql)

// Query -> Obter informações (GET)
// Mutation -> Manipular dados  (POST/PUT/PATCH/DELETE)
// Scalar Types -> String, Int, Boolean, Float e ID (Tipos primitivos, tirando o ID que é um tipo primitivo do
// do Graphql)

// O "!" serve para dizer que tal valor é obrigatório

startServer({ typeDefs, resolvers });
