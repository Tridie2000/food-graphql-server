export class Store {
  readonly id: string;
  readonly city: string;
  readonly name: string;
  readonly number: number;
  readonly postalCode: string;
  readonly street: string;

  constructor(
    id: string,
    city: string,
    name: string,
    number: number,
    postalCode: string,
    street: string
  ) {
    this.id = id;
    this.city = city;
    this.name = name;
    this.number = number;
    this.postalCode = postalCode;
    this.street = street;
  }
}
