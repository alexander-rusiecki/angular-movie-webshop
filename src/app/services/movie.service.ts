import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IMovie } from '@interfaces/movie';
import { IMovieCategory } from '@interfaces/movieCategory';
import { catchError, map, mergeMap, Subject, throwError } from 'rxjs';

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

  getAllMovies() {
    this.http
      .get<IMovie[]>(environment.moviesUrl)
      .pipe(catchError(this.handleError))
      .subscribe((allMovies: IMovie[]) => {
        this.movies.next(allMovies);
      });
  }

  getMovieById(id: number) {
    this.http
      .get<IMovie[]>(environment.moviesUrl)
      .pipe(catchError(this.handleError))
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
      .pipe(catchError(this.handleError))
      .pipe(
        map((response) =>
          response.find((theCategory) => theCategory.name === category)
        )
      )
      .subscribe((webshopCategory: any) => {
        this.category.next(webshopCategory);
      });
  }
  getMovieCategoryByMovieId(id: number) {
    this.http
      .get<any[]>(environment.categoriesUrl)
      .pipe(catchError(this.handleError))
      .pipe(
        map((response) =>
          response.find((theCategoryId) => theCategoryId.id === id)
        )
      )
      .subscribe((webshopCategoryById) => {
        this.category.next(webshopCategoryById);
      });
  }

  searchMovie(searchTerm: string) {
    this.http
      .get<IMovie[]>(`${environment.searchMoviesUrl}?searchText=${searchTerm}`)
      .pipe(catchError(this.handleError))
      .subscribe((webshopFoundMovies: any) => {
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
