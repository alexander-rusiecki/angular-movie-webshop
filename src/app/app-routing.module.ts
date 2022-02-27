import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from '@components/movies/movies.component';
import { CartComponent } from '@components/cart/cart.component';
import { MovieDetailsComponent } from '@components/movie-details/movie-details.component';
import { NotFoundComponent } from '@components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
