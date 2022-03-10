import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IOrder } from '@interfaces/OrderInterface';
import { catchError, Subject, throwError } from 'rxjs';

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
      .pipe(catchError(this.handleError))
      .subscribe((activOrders: IOrder[]) => {
        this.orders.next(activOrders);
      });
  }
  deleteOrder(id: number) {
    this.http
      .delete(`${environment.createOrderUrl}/${id}?companyId=40`)
      .pipe(catchError(this.handleError))
      .subscribe(() => {
        this.http
          .get<IOrder[]>(`${environment.createOrderUrl}?companyId=40`)
          .pipe(catchError(this.handleError))
          .subscribe((data: IOrder[]) => {
            this.orders.next(data);
          });
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
