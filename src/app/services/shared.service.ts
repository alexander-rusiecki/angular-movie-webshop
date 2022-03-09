import { IMovie } from '@interfaces/movie';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private totalPrice = new Subject<number>();
  totalPrice$ = this.totalPrice.asObservable();
  constructor() {}
  getTotalPrice() {
    let b = JSON.parse(localStorage.getItem('boughtMovies')!);
    let price = b.reduce((acc: number, curr: IMovie) => {
      return acc + curr.price;
    }, 0);
    this.totalPrice.next(price);
  }
}
