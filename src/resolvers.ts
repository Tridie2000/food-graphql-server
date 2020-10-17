import { Product } from "./models/product.model";
import { Store } from "./models/store.model";
import * as data from "./data";

function getStores(): Store[] {
  return data.getStores();
}

function getProducts(storeId: string): Product[] {
  return data.getProducts().filter((product: Product) => {
    return product.storeId == storeId;
  });
}

export const resolvers = {
  Query: {
    stores: () => getStores(),
    products: (parent: any, args: any, context: any, info: any) =>
      getProducts(args.storeId),
  },
};
