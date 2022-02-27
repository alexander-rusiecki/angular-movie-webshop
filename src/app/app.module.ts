import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ActionComponent } from './components/action/action.component';
import { ComedyComponent } from './components/comedy/comedy.component';
import { SciFiComponent } from './components/sci-fi/sci-fi.component';
import { ThrillerComponent } from './components/thriller/thriller.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    NotFoundComponent,
    MovieDetailsComponent,
    MoviesComponent,
    ActionComponent,
    ComedyComponent,
    SciFiComponent,
    ThrillerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCartArrowDown);
  }
}
