import { Injectable } from '@angular/core';
import { IMovie } from '@interfaces/movie';
import { Movie } from '@models/movie';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  localStorage: Storage;
  public cartItemList: Movie[] = [];
  public productlist = new BehaviorSubject<Movie[]>([]);
  public lsList = new BehaviorSubject<Movie[]>([]);

  constructor() {
    this.localStorage = window.localStorage;
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
  }

  clear(key: string): void {
    this.localStorage.removeItem(key);
  }

  getBoughtMoviesAmount(key: string): number {
    return JSON.parse(this.localStorage.getItem(key)!).length;
  }
  getProducts(): Observable<Movie[]> {
    return this.productlist.asObservable();
  }
}
