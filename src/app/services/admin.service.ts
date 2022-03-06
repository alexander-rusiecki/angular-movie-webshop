import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IOrder } from '@interfaces/order';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private orders = new Subject<IOrder[]>();
  orders$ = this.orders.asObservable();

  constructor(private http: HttpClient) {}
  getActiveOrders() {
    this.http
      .get<IOrder[]>(`${environment.createOrderUrl}?companyId=40`)
      .subscribe((activOrders: IOrder[]) => {
        this.orders.next(activOrders);
      });
  }
  deleteOrder(id: number) {
    this.http
      .delete(`${environment.createOrderUrl}/${id}?companyId=40`)
      .subscribe(() => {
        this.http
          .get<IOrder[]>(`${environment.createOrderUrl}?companyId=40`)
          .subscribe((data: IOrder[]) => {
            this.orders.next(data);
          });
      });
  }
}
