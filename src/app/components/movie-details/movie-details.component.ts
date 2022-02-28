import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '@interfaces/movie';
import { MovieService } from '@services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movieId: number = 0;
  selectedMovie: any;
  allMovies!: IMovie[];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((p) => {
      this.movieId = +p['id'];
      this.movieService.movies$.subscribe((webshopMovies: IMovie[]) => {
        this.selectedMovie = webshopMovies.filter(
          (mov) => mov.id === this.movieId
        );
      });

      this.movieService.getAllMovies();
      // console.log(this.movieId);
      // Anropa min tjänst för att hämta ett objekt
      // this.movieService.getAllMovies().subscribe((movies: any) => {
      //   this.selectedMovie = movies.filter((m: any) => m.id === this.movieId);
      // });
      // this.movieService.getAllMovies();
    });
    // this.movieService.getMovieById(this.movieId).subscribe((movie) => {
    //   this.selectedMovie = movie;
    // });
    // this.movieService.movie$.subscribe((webshopMovie: IMovie) => {
    //   this.selectedMovie = webshopMovie;
    // });

    // this.movieService.getMovieById(this.movieId);
  }
}
