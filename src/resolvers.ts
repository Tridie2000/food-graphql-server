import { StoreService } from "./data/storeService";

const service = new StoreService();

export const resolvers = {
  Query: {
    stores: () => service.getStores(),
    store: (parent: any, args: any, context: any, info: any) =>
      service.getStore(args.storeId),
    products: (parent: any, args: any, context: any, info: any) =>
      service.getProducts(args.storeId),
  },
  Mutation: {
    createStore: (parent: any, args: any, context: any, info: any) =>
      service.createStore(
        args.city,
        args.name,
        args.number,
        args.postalCode,
        args.street
      ),
    createReservation: (parent: any, args: any, context: any, info: any) =>
      service.createReservation(args.reservationProduct),
  },
  Store: {
    products: (parent: any, args: any, context: any, info: any) =>
      service.getProducts(parent.id),
  },
};
