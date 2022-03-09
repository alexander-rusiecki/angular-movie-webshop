import { SharedService } from './../../services/shared.service';
import { LocalStorageService } from '@services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { IMovie } from '@interfaces/movie';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  boughtMovies: IMovie[] = [];
  totalPrice: number = 0;
  constructor(
    private localStorageService: LocalStorageService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.boughtMovies = this.localStorageService.get('boughtMovies');
    this.localStorageService.getBoughtMoviesAmount();
    this.sharedService.totalPrice$.subscribe((priceFromService: number) => {
      this.totalPrice = priceFromService;
    });
    this.sharedService.getTotalPrice();
  }
  remove(index: number): void {
    this.boughtMovies.splice(index, 1);
    this.totalPrice = this.boughtMovies.reduce((acc: number, curr: IMovie) => {
      return acc + curr.price;
    }, 0);
    this.localStorageService.set('boughtMovies', this.boughtMovies);
  }

  clearCart(key: string): void {
    this.boughtMovies = [];
    this.localStorageService.set(key, this.boughtMovies);
    this.localStorageService.removeItem(key);
  }
}
