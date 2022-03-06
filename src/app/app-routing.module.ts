import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from '@components/movies/movies.component';
import { CategoryComponent } from '@components/category/category.component';
import { CartComponent } from '@components/cart/cart.component';
import { CheckoutComponent } from '@components/checkout/checkout.component';
import { MovieDetailsComponent } from '@components/movie-details/movie-details.component';
import { ActionComponent } from '@components/action/action.component';
import { ThrillerComponent } from '@components/thriller/thriller.component';
import { ComedyComponent } from '@components/comedy/comedy.component';
import { SciFiComponent } from '@components/sci-fi/sci-fi.component';
import { AdminComponent } from '@components/admin/admin.component';
import { NotFoundComponent } from '@components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MoviesComponent },
  // { path: 'action', component: ActionComponent },
  // { path: 'thriller', component: ThrillerComponent },
  // { path: 'comedy', component: ComedyComponent },
  // { path: 'sci-fi', component: SciFiComponent },
  { path: 'categories/:category', component: CategoryComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
