import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IMovie } from '@interfaces/MovieInterface';
import { IMovieCategory } from '@interfaces/MovieCategoryInterface';
import { catchError, map, Subject, throwError } from 'rxjs';
import {
  mockMovie1,
  mockMovie2,
  mockMovie3,
  mockMovieArray,
} from '@mocks/mockMovies';

@Injectable({
  providedIn: 'root',
})
export class MockMovieService {
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
    this.movies.next(mockMovieArray);
  }

  getMovieById(id: number): void {
    this.movie.next(mockMovie1);
  }

  // getMoviesByCategory(category: string) {
  //   this.http
  //     .get<IMovieCategory[]>(environment.categoriesUrl)
  //     .pipe(catchError(this.handleError))
  //     .pipe(
  //       map((response: IMovieCategory[]) =>
  //         response.find(
  //           (theCategory: IMovieCategory) => theCategory.name === category
  //         )
  //       )
  //     )
  //     .subscribe((webshopCategory: any) => {
  //       this.category.next(webshopCategory);
  //     });
  // }

  // searchMovie(searchTerm: string) {
  //   this.http
  //     .get<IMovie[]>(`${environment.searchMoviesUrl}?searchText=${searchTerm}`)
  //     .pipe(catchError(this.handleError))
  //     .subscribe((webshopFoundMovies: IMovie[]) => {
  //       this.search.next(webshopFoundMovies);
  //     });
  // }
  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `,
  //       error.error
  //     );
  //   }
  //   return throwError(
  //     () => new Error('Something bad happened; please try again later.')
  //   );
  // }
}
