import { Component, OnInit } from '@angular/core';
import { IMovie } from '@interfaces/movie';
import { MovieService } from '@services/movie.service';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

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
    this.movieService.search$.subscribe((webshopFoundMovies: any) => {
      this.foundMovies = webshopFoundMovies;
    });

    this.movieService.searchMovie(this.searchMovieForm.value.movie);
    this.movies = this.foundMovies;
    console.log(this.foundMovies);
  }
}
