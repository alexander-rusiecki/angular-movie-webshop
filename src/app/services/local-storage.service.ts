import { Injectable } from '@angular/core';
import { IMovie } from '@interfaces/MovieInterface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  localStorage: Storage;
  moviesInLocalStorage: IMovie[] = [];

  private localStorageCart = new Subject<IMovie[]>();
  localStorageCart$ = this.localStorageCart.asObservable();

  constructor() {
    this.localStorage = window.localStorage;
  }
  getBoughtMoviesAmount(): void {
    this.moviesInLocalStorage = JSON.parse(
      this.localStorage.getItem('boughtMovies')!
    );
    this.localStorageCart.next(this.moviesInLocalStorage);
  }
  updateLocalStorage(key: string, newMovie: IMovie): void {
    this.moviesInLocalStorage = JSON.parse(this.localStorage.getItem(key)!);
    this.moviesInLocalStorage = [
      ...JSON.parse(this.localStorage.getItem(key)!),
      newMovie,
    ];
    this.localStorage.setItem(key, JSON.stringify(this.moviesInLocalStorage));
    this.localStorageCart.next(this.moviesInLocalStorage);
  }
  removeItem(key: string): void {
    this.localStorage.removeItem(key);
    this.localStorageCart.next(this.moviesInLocalStorage);
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
}
