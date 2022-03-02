import { IMovie } from './../../interfaces/movie';
import { MovieService } from '@services/movie.service';
import { LocalStorageService } from '@services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  boughtMoviesAmount: number = 0;
  foundMovies: IMovie[] = [];
  searchMovieForm = this.fb.group({
    movie: [''],
  });
  searchTerm: string = '';
  constructor(
    private localStorageService: LocalStorageService,
    private movieService: MovieService,
    private fb: FormBuilder
  ) {}
  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.boughtMoviesAmount}`);
  }

  ngOnInit(): void {
    this.localStorageService.get('boughtMovies');
    this.boughtMoviesAmount = JSON.parse(
      this.localStorageService.getBoughtMoviesAmount('boughtMovies')
    ).length;
  }
}
