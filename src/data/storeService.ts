import { Store } from "../models/store.model";
import * as data from "../data";
import * as yup from "yup";
import { Product } from "../models/product.model";

export class StoreService {
  getStores(): Store[] {
    return data.getStores();
  }

  getProducts(storeId: string): Product[] {
    return data.getProducts().filter((product: Product) => {
      return product.storeId == storeId;
    });
  }

  async createStore(
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
}
