import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LocalStorageService } from '@services/local-storage.service';
import { MovieService } from '@services/movie.service';
import { IMovie } from '@interfaces/MovieInterface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: number = 0;
  selectedMovie!: IMovie;
  key: string = 'boughtMovies';
  boughtMovies: IMovie[] = [];
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.movieId = +param['id'];
      this.movieService.movie$.subscribe(
        (webshopMovieWithCorrectId: IMovie) => {
          this.selectedMovie = webshopMovieWithCorrectId;
        }
      );
      this.movieService.getMovieById(this.movieId);
    });
    this.boughtMovies = this.localStorageService.get('boughtMovies');
  }
  addToCart(key: string, movie: IMovie) {
    this.localStorageService.updateLocalStorage(key, movie);
  }
}
