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
  totalPrice: any = 0;
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.boughtMovies = JSON.parse(
      this.localStorageService.get('boughtMovies')
    );
    this.totalPrice = JSON.parse(
      this.localStorageService.get('boughtMovies')
    ).reduce((acc: number, curr: IMovie) => {
      return acc + curr.price;
    }, 0);
  }
}
