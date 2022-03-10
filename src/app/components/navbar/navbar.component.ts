import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '@services/local-storage.service';
import { IMovie } from '@interfaces/MovieInterface';

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
      (moviesInLocalStorage: IMovie[]) => {
        this.boughtMoviesAmount = moviesInLocalStorage.length;
      }
    );
    this.localStorageService.getBoughtMoviesAmount();
  }
}
