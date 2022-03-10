import { IMovie } from '@interfaces/MovieInterface';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  moviesInLocalStorage: IMovie[] = [];
  total: number = 0;

  private totalPrice = new Subject<number>();
  totalPrice$ = this.totalPrice.asObservable();
  constructor() {}
  getTotalPrice() {
    this.moviesInLocalStorage = JSON.parse(
      localStorage.getItem('boughtMovies')!
    );
    this.total = this.moviesInLocalStorage.reduce(
      (acc: number, curr: IMovie) => {
        return acc + curr.price;
      },
      0
    );
    this.totalPrice.next(this.total);
  }
}
