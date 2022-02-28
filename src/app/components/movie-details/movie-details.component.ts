import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '@interfaces/movie';
import { LocalStorageService } from '@services/local-storage.service';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: number = 0;
  selectedMovie!: IMovie;
  key: string = 'boughtMovies';
  boughtMovies: any = [];
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.movieId = +param['id'];
      this.movieService.movie$.subscribe((webshopMovie: IMovie) => {
        this.selectedMovie = webshopMovie;
      });
      this.movieService.getMovieById(this.movieId);
    });
    this.boughtMovies = JSON.parse(
      this.localStorageService.getItem('boughtMovies')
    );
    console.log(this.boughtMovies);
  }
  buyMovie(selectedMovie: any) {
    this.boughtMovies.push(JSON.stringify(selectedMovie));
    // console.log(this.boughtMovies);

    this.localStorageService.setItem('boughtMovies', this.boughtMovies);
  }
}
