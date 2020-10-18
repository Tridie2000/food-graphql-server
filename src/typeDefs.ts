import { gql } from "apollo-server";

export const typeDefs = gql`
  type Store {
    id: String
    name: String
    city: String
    number: Int
    postalCode: String
    street: String
  }

  type Product {
    id: String
    description: String
    name: String
    price: Int
    storeId: String
  }

  type Query {
    stores: [Store]
    products(storeId: String): [Product]
  }

  type Mutation {
    createStore(
      city: String
      name: String
      number: Int
      postalCode: String
      street: String
    ): Store
  }
`;
