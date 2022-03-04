import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IMovie } from '@interfaces/movie';
import { IMovieCategory } from '@interfaces/movieCategory';
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
  private search = new Subject<any>();
  search$ = this.search.asObservable();

  constructor(private http: HttpClient) {}

  getAllMovies() {
    this.http
      .get<IMovie[]>(environment.allMoviesUrl)
      .subscribe((allMovies: IMovie[]) => {
        this.movies.next(allMovies);
      });
  }

  getMovieById(id: number) {
    this.http
      .get<IMovie[]>(environment.allMoviesUrl)
      .pipe(
        map((response) => response.find((movie: IMovie) => movie.id === id))
      )
      .subscribe((movieWithCorrectId: any) => {
        this.movie.next(movieWithCorrectId);
      });
  }

  getMoviesByCategory(category: string) {
    this.http
      .get<IMovieCategory[]>(environment.categoriesUrl)
      .pipe(
        map((response) =>
          response.find((theCategory) => theCategory.name === category)
        )
      )
      .subscribe((webshopCategory) => {
        this.category.next(webshopCategory);
      });
  }

  searchMovie(searchTerm: string) {
    this.http
      .get<IMovie[]>(`${environment.searchMoviesUrl}?searchText=${searchTerm}`)
      .subscribe((webshopFoundMovies: any) => {
        this.search.next(webshopFoundMovies);
      });
  }
}
