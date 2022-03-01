import { IMovie } from './../../interfaces/movie';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
})
export class ActionComponent implements OnInit {
  moviesFilteredByCategory: IMovie[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.movies$.subscribe((webshopMovies: IMovie[]) => {
      this.moviesFilteredByCategory = webshopMovies;
    });

    this.movieService.getMoviesByCategory('Action');
  }
}
