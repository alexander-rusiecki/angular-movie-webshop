import { Injectable } from '@angular/core';
import { IMovie } from '@interfaces/movie';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key: string): IMovie[] | [] {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, JSON.stringify([]));
      return JSON.parse(localStorage.getItem(key)!);
    } else {
      return JSON.parse(localStorage.getItem(key)!);
    }
  }

  set(key: string, data: IMovie[]) {
    this.localStorage.setItem(key, JSON.stringify(data));
  }

  clear(key: string) {
    this.localStorage.removeItem(key);
  }

  getBoughtMoviesAmount(key: string): number {
    return JSON.parse(localStorage.getItem(key)!).length;
  }
}
