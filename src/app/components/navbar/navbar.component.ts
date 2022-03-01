import { LocalStorageService } from '@services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  boughtMoviesAmount: number = 0;
  constructor(private localStorageService: LocalStorageService) {}
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
