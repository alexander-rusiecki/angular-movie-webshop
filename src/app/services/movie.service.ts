import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IMovie } from '@interfaces/MovieInterface';
import { IMovieCategory } from '@interfaces/MovieCategoryInterface';
import { catchError, map, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies = new Subject<IMovie[]>();
  movies$ = this.movies.asObservable();
  private movie = new Subject<IMovie>();
  movie$ = this.movie.asObservable();
  private category = new Subject<IMovieCategory>();
  category$ = this.category.asObservable();
  private categoryId = new Subject<number>();
  categoryId$ = this.categoryId.asObservable();
  private search = new Subject<any>();
  search$ = this.search.asObservable();

  constructor(private http: HttpClient) {}

  getAllMovies(): void {
    this.http
      .get<IMovie[]>(environment.moviesUrl)
      .pipe(catchError(this.handleError))
      .subscribe((allMovies: IMovie[]) => {
        this.movies.next(allMovies);
      });
  }

  getMovieById(id: number): void {
    this.http
      .get<IMovie[]>(environment.moviesUrl)
      .pipe(catchError(this.handleError))
      .pipe(
        map((response: IMovie[]) =>
          response.find((movie: IMovie) => movie.id === id)
        )
      )
      .subscribe((movieWithCorrectId: any) => {
        this.movie.next(movieWithCorrectId);
      });
  }

  getMoviesByCategory(category: string): void {
    this.http
      .get<IMovieCategory[]>(environment.categoriesUrl)
      .pipe(catchError(this.handleError))
      .pipe(
        map((response: IMovieCategory[]) =>
          response.find(
            (theCategory: IMovieCategory) => theCategory.name === category
          )
        )
      )
      .subscribe((webshopCategory: any) => {
        this.category.next(webshopCategory);
      });
  }

  searchMovie(searchTerm: string): void {
    this.http
      .get<IMovie[]>(`${environment.searchMoviesUrl}?searchText=${searchTerm}`)
      .pipe(catchError(this.handleError))
      .subscribe((webshopFoundMovies: IMovie[]) => {
        this.search.next(webshopFoundMovies);
      });
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
