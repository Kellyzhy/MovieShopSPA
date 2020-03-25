import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UpdateMovieComponent } from './admin/update-movie/update-movie.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { PurchasesComponent } from './account/purchases/purchases.component';
import { FavoritesComponent } from './account/favorites/favorites.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'topmovies',component:MovieListComponent},
  {path:'toprevenue',component:MovieListComponent},
  {path:'genre/:id',component:MovieListComponent},
  {path:'movie/create',component:CreateMovieComponent},
  {path:'movie/update',component:UpdateMovieComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'movies/:id',component:MovieDetailComponent},
  {path:'user/:id/purchase',component:PurchasesComponent},
  {path:'user/:id/favorite',component:FavoritesComponent},
  {path:'**',component:NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
