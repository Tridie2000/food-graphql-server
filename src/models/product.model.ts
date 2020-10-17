export class Product {
  readonly id: string;
  readonly description: string;
  readonly name: string;
  readonly price: number;
  readonly storeId: string;

  constructor(
    id: string,
    description: string,
    name: string,
    price: number,
    storeId: string
  ) {
    this.id = id;
    this.description = description;
    this.name = name;
    this.price = price;
    this.storeId = storeId;
  }
}
