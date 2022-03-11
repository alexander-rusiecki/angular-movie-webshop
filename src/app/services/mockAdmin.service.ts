import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { mockOrdersArray } from '@mocks/mockOrders';
import { IOrder } from '@interfaces/OrderInterface';

@Injectable({
  providedIn: 'root',
})
export class MockAdminService {
  private orders = new Subject<IOrder[]>();
  orders$ = this.orders.asObservable();

  constructor() {}

  getActiveOrders(): void {
    this.orders.next(mockOrdersArray);
  }
}
