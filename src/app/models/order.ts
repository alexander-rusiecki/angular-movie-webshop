import { OrderRow } from '@models/order-row';

export class Order {
  // id: number;
  companyId: number;
  created: string;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: OrderRow[];
  constructor(
    // id: number,
    created: string,
    createdBy: string,
    paymentMethod: string,
    totalPrice: number,
    orderRows: OrderRow[]
  ) {
    // this.id = id;
    this.companyId = 40;
    this.created = created;
    this.createdBy = createdBy;
    this.paymentMethod = paymentMethod;
    this.totalPrice = totalPrice;
    this.status = 1;
    this.orderRows = orderRows;
  }
}
