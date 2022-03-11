import { Injectable } from '@angular/core';
import { IMovie } from '@interfaces/MovieInterface';
import { Subject } from 'rxjs';
import { mockMovie1, mockMovieArray } from '@mocks/mockMovies';

@Injectable({
  providedIn: 'root',
})
export class MockMovieService {
  private movies = new Subject<IMovie[]>();
  movies$ = this.movies.asObservable();
  private movie = new Subject<IMovie>();
  movie$ = this.movie.asObservable();

  constructor() {}

  getAllMovies(): void {
    this.movies.next(mockMovieArray);
  }

  getMovieById(id: number): void {
    this.movie.next(mockMovie1);
  }
}
