import { Product } from "./models/product.model";
import { Store } from "./models/store.model";
import * as data from "./data";
import * as yup from "yup";

function getStores(): Store[] {
  return data.getStores();
}

function getProducts(storeId: string): Product[] {
  return data.getProducts().filter((product: Product) => {
    return product.storeId == storeId;
  });
}

async function createStore(
  city: string,
  name: string,
  number: number,
  postalCode: string,
  street: string
) {
  const schema = yup.object().shape({
    city: yup.string().required(),
    name: yup.string().required(),
    number: yup.number().required().positive().integer(),
    postalCode: yup.string().required().length(4),
    street: yup.string().required(),
  });

  const valid = await schema.isValid({
    city: city,
    name: name,
    number: number,
    postalCode: postalCode,
    street: street,
  });

  if (valid) {
    return data.createStore(city, name, number, postalCode, street);
  }
}

export const resolvers = {
  Query: {
    stores: () => getStores(),
    products: (parent: any, args: any, context: any, info: any) =>
      getProducts(args.storeId),
  },
  Mutation: {
    createStore: (parent: any, args: any, context: any, info: any) =>
      createStore(
        args.city,
        args.name,
        args.number,
        args.postalCode,
        args.street
      ),
  },
};
