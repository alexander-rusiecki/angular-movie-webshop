import { IMovie } from './../../interfaces/movie';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@services/local-storage.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  boughtMoviesAmount: number = 0;
  category: string = '';

  constructor(
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.localStorageService.get('boughtMovies');
    this.localStorageService.localStorageCart$.subscribe(
      (cartMovies: IMovie[]) => {
        this.boughtMoviesAmount = cartMovies.length;
      }
    );
    this.localStorageService.getBoughtMoviesAmount();
  }
}
