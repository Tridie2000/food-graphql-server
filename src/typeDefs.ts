import { gql } from "apollo-server";

export const typeDefs = gql`
  type Store {
    id: String
    name: String
  }

  type Query {
    stores: [Store]
  }
`;
