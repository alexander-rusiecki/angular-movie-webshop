export class Movie {
  productId: number;
  product: string;
  amount: number;
  constructor(productId: number, movieName: string) {
    this.productId = productId;
    this.product = movieName;
    this.amount = 1;
  }
}
