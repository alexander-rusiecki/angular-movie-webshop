import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }
  getBoughtMoviesAmount(key: string): any {
    return this.localStorage.getItem(key);
  }

  get(key: string): any {
    if (this.localStorage.getItem(key) === null) {
      this.localStorage.setItem(key, JSON.stringify([]));
      return this.localStorage.getItem(key);
    } else {
      return this.localStorage.getItem(key);
    }
  }
  set(key: string, value: any) {
    this.localStorage.setItem(key, JSON.stringify(value));
  }
  removeItem(key: string) {
    this.localStorage.removeItem(key);
  }
}
