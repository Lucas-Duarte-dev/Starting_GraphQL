# Entendendo o GraphQL

## Pontos importantes

- Toda request é POST!!

- Toda requisição bate no mesmo endpoint (/graphql)

- Query -> Obter informações (GET)
- Mutation -> Manipular dados (POST/PUT/PATCH/DELETE)
- Scalar Types -> String, Int, Boolean, Float e ID (Tipos primitivos, tirando o ID que é um tipo primitivo do Graphql)

- O "!" serve para dizer que tal valor é obrigatório

```typescript
  createUser: (_, { data }) => User.create(data),
  // O primeiro parâmetro é o contexto que essa função se aplica, nesse caso ela contem a estrutura da classe User
```
