import { gql } from "apollo-server";

export const typeDefs = gql`
  input ReservationInput {
    reservationProducts: [ReservationProductInput]
  }

  input ReservationProductInput {
    productId: String
    quantity: Int
  }

  type Reservation {
    date: String
    id: String
    reservationProducts: [ReservationProduct]
  }

  type ReservationProduct {
    productId: String
    quantity: Int
  }

  type Store {
    id: String
    name: String
    city: String
    number: Int
    postalCode: String
    street: String
    products: [Product]
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
    store(storeId: String): Store
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
    createReservation(reservationProduct: ReservationInput): Reservation
  }
`;
