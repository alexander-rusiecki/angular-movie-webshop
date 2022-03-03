import { orderRow } from '@models/order-row';

export class Order {
  id: number;
  companyId: number;
  created: string;
  createdBy: null;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: orderRow[];
  constructor(
    id: number,
    companyId: number,
    created: string,
    createdBy: null,
    paymentMethod: string,
    totalPrice: number,
    status: number,
    orderRows: orderRow[]
  ) {
    this.id = id;
    this.companyId = 40;
    this.created = created;
    this.createdBy = createdBy;
    this.paymentMethod = 'Paypal';
    this.totalPrice = totalPrice;
    this.status = status;
    this.orderRows = orderRows;
  }
}
