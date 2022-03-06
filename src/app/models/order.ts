import { OrderRow } from '@models/order-row';
export class Order {
  companyId: number;
  created: string;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: OrderRow[];
  constructor(
    created: string,
    createdBy: string,
    paymentMethod: string,
    totalPrice: number,
    orderRows: OrderRow[]
  ) {
    this.companyId = 40;
    this.created = created;
    this.createdBy = createdBy;
    this.paymentMethod = paymentMethod;
    this.totalPrice = totalPrice;
    this.status = 1;
    this.orderRows = orderRows;
  }
}
