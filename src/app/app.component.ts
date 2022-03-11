import { LocalStorageService } from './services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { IMovie } from '@interfaces/MovieInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Angular movie webshop';
  moviesInCart: IMovie[] = [];
  constructor(private localStorageService: LocalStorageService) {}
  ngOnInit(): void {
    this.moviesInCart = this.localStorageService.get('boughtMovies');
  }
}
