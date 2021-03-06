import { LocalStorageService } from '@services/local-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environments/environment';
import { catchError, Subject, throwError } from 'rxjs';
import { Order } from '@models/Order';
import { IOrder } from '@interfaces/OrderInterface';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private order = new Subject<Order>();
  order$ = this.order.asObservable();

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  createOrder(order: Order): void {
    this.http
      .post<IOrder>(environment.createOrderUrl, order)
      .pipe(catchError(this.handleError))
      .subscribe((myOrder: IOrder) => {
        this.order.next(myOrder);
        this.localStorageService.set('boughtMovies', []);
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
