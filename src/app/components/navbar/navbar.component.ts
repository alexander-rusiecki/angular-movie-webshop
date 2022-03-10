import { IMovie } from '@interfaces/movie';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '@services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  boughtMoviesAmount: number = 0;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.localStorageService.localStorageCart$.subscribe(
      (cartMovies: IMovie[]) => {
        this.boughtMoviesAmount = cartMovies.length;
      }
    );
    this.localStorageService.getBoughtMoviesAmount();
  }
}
