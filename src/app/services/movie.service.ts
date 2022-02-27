import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IMovie } from '@interfaces/movie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies = new Subject<IMovie[]>();
  movies$ = this.movies.asObservable();

  constructor(private http: HttpClient) {}

  getAllMovies() {
    this.http
      .get<IMovie[]>(environment.moviesUrl)
      .subscribe((webshopMovies: IMovie[]) => {
        this.movies.next(webshopMovies);
      });
  }
}
