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
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.boughtMovies = JSON.parse(
      this.localStorageService.get('boughtMovies')
    );

    this.totalPrice = this.boughtMovies.reduce((acc: number, curr: IMovie) => {
      return acc + curr.price;
    }, 0);
  }
  remove(index: number): any {
    this.boughtMovies.splice(index, 1);
    this.totalPrice = this.boughtMovies.reduce((acc: number, curr: IMovie) => {
      return acc + curr.price;
    }, 0);
    this.localStorageService.set('boughtMovies', this.boughtMovies);
  }

  clearCart() {
    this.boughtMovies = [];
    this.localStorageService.set('boughtMovies', this.boughtMovies);
    this.localStorageService.clear('boughtMovies');
  }
}
