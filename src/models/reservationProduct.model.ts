export class ReservationProduct {
  readonly productId: string;
  readonly quantity: number;

  constructor(id: string, quantity: number) {
    this.productId = id;
    this.quantity = quantity;
  }
}
