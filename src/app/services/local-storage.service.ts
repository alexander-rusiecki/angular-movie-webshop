import { Injectable } from '@angular/core';
import { IMovie } from '@interfaces/movie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  localStorage: Storage;

  private localStorageCart = new Subject<IMovie[]>();
  localStorageCart$ = this.localStorageCart.asObservable();

  constructor() {
    this.localStorage = window.localStorage;
  }
  getBoughtMoviesAmount(): void {
    let moviesInLs = JSON.parse(this.localStorage.getItem('boughtMovies')!);
    this.localStorageCart.next(moviesInLs);

    // .subscribe(
    //   (moviesInLs: IMovie[]) => {
    //     this.localStorageCart.next(moviesInLs);
    //   }
    // );
  }

  get(key: string): IMovie[] | [] {
    if (this.localStorage.getItem(key) === null) {
      this.localStorage.setItem(key, JSON.stringify([]));
      return JSON.parse(this.localStorage.getItem(key)!);
    } else {
      return JSON.parse(this.localStorage.getItem(key)!);
    }
  }

  set(key: string, data: IMovie[]): void {
    this.localStorage.setItem(key, JSON.stringify(data));
    this.getBoughtMoviesAmount();
  }

  clear(key: string): void {
    this.localStorage.removeItem(key);
  }

  // getProducts(): Observable<Movie[]> {
  //   return this.productlist.asObservable();
  // }
}
