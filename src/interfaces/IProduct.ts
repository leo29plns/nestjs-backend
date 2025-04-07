export interface IProduct {
  _id?: unknown;
  sellerId: string;
  name: string;
  qty: number;
  price: number;
  tax: number;
  description?: string;
}
