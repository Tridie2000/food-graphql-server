import { StoreService } from "./data/storeService";

const service = new StoreService();

export const resolvers = {
  Query: {
    stores: () => service.getStores(),
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
  },
};
