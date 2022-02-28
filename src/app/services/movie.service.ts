import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IMovie } from '@interfaces/movie';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies = new Subject<IMovie[]>();
  movies$ = this.movies.asObservable();
  private movie = new Subject<IMovie>();
  movie$ = this.movie.asObservable();
  private category = new Subject<any>();
  category$ = this.category.asObservable();

  constructor(private http: HttpClient) {}

  getAllMovies() {
    this.http
      .get<IMovie[]>(environment.moviesUrl)
      .subscribe((webshopMovies: IMovie[]) => {
        this.movies.next(webshopMovies);
      });
  }
  getMovieById(id: number) {
    this.http
      .get<IMovie[]>(environment.moviesUrl)
      .pipe(
        map((response) => response.find((movie: IMovie) => movie.id === id))
      )
      .subscribe((webshopMovie: any) => {
        this.movie.next(webshopMovie);
      });
  }
  getMoviesByCategory(category: string) {
    this.http
      .get<IMovie[]>(environment.categoriesUrl)
      .pipe(
        map((response) =>
          response.filter((theCategory) => theCategory.name === category)
        )
      )
      .subscribe((webshopCategory) => {
        this.category.next(webshopCategory);
      });
  }
}
