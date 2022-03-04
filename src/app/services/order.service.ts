import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from '@environments/environment';
import { catchError, Subject, throwError } from 'rxjs';
import { Order } from '@models/order';
import { IOrder } from '@interfaces/order';

const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private order = new Subject<Order>();
  order$ = this.order.asObservable();

  constructor(private http: HttpClient) {}
  createOrder(order: Order) {
    this.http
      .post<any>(environment.createOrderUrl, order, httpHeaders)
      .pipe(catchError(this.handleError))
      .subscribe((myOrder: any) => {
        this.order.next(myOrder);
      });
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
