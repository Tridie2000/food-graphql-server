import { ReservationProduct } from "./reservationProduct.model";

export class Reservation {
  readonly id: string;
  readonly date: string;
  readonly reservationProducts: ReservationProduct[];

  constructor(id: string, date: string, products: ReservationProduct[]) {
    this.reservationProducts = products;
    this.id = id;
    this.date = date;
  }
}
