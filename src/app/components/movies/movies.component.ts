import { Component, OnInit } from '@angular/core';
import { IMovie } from '@interfaces/movie';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.movies$.subscribe((webshopMovies: IMovie[]) => {
      this.movies = webshopMovies;
    });

    this.movieService.getAllMovies();
    console.log(this.movies);
  }
}
