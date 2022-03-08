import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from '@services/local-storage.service';
import { IMovie } from './../../interfaces/movie';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  boughtMoviesAmount: number = 0;

  searchTerm: string = '';
  constructor(
    private localStorageService: LocalStorageService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.localStorageService.get('boughtMovies');
    console.log('yo');

    this.boughtMoviesAmount =
      this.localStorageService.getBoughtMoviesAmount('boughtMovies');
    // console.log(this.boughtMoviesAmount);
    // this.localStorageService.getProducts().subscribe((res) => {

    //    this.boughtMoviesAmount = res.length;
    // });
  }
}
