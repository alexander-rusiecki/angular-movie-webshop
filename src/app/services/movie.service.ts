import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { IMovie } from '@interfaces/movie';
import { filter, map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private movies = new Subject<IMovie[]>();
  movies$ = this.movies.asObservable();
  private movie = new Subject<IMovie>();
  movie$ = this.movie.asObservable();

  constructor(private http: HttpClient) {}

  getAllMovies() {
    this.http
      .get<IMovie[]>(environment.moviesUrl)
      .subscribe((webshopMovies: IMovie[]) => {
        this.movies.next(webshopMovies);
      });
  }
  getMovieById(id: number) {
    return this.http.get<IMovie>(environment.moviesUrl);
    // .subscribe((webshopMovie: IMovie) => {
    //   this.movies.next(webshopMovie);
    // });
  }
}
// this.experienceService
//   .getSessionListByExperienceId(id)
//   .pipe(
//     filter((res) => res.length > 0), // emits only if res.length is larger than 0
//     map((res) => res[0]) // emits the actual data in res[0]
//   )
//   .subscribe((data) => {
//     this.session.set(id, data);
//   });
