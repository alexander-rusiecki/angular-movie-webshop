import { IMovie } from '@interfaces/movie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key: string): any {
    if (this.localStorage.getItem(key) === null) {
      this.localStorage.setItem(key, JSON.stringify([]));
      return this.localStorage.getItem(key);
    } else {
      return this.localStorage.getItem(key);
    }
  }

  set(key: string, value: IMovie[]) {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  clear(key: string) {
    this.localStorage.removeItem(key);
  }

  getBoughtMoviesAmount(key: string): any {
    return this.localStorage.getItem(key);
  }
}
