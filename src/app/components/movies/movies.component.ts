import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '@services/movie.service';
import { IMovie } from '@interfaces/MovieInterface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];
  foundMovies: IMovie[] = [];
  searchMovieForm = this.fb.group({
    movie: [''],
  });
  searchTerm: string = '';

  constructor(private movieService: MovieService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.movieService.movies$.subscribe((webshopMovies: IMovie[]) => {
      this.movies = webshopMovies;
    });
    this.movieService.getAllMovies();
  }

  handleSubmit() {
    this.movieService.search$.subscribe((webshopFoundMovies: IMovie[]) => {
      this.movies = webshopFoundMovies;
    });
    this.movieService.searchMovie(this.searchMovieForm.value.movie);
    this.searchMovieForm.reset();
  }
}
