//Angular library
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


//third party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 


//customize 
import { AppComponent } from './app.component'; //simple component we created
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { CreateCastComponent } from './admin/create-cast/create-cast.component';
import { PurchasesComponent } from './account/purchases/purchases.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { UpdateMovieComponent } from './admin/update-movie/update-movie.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { FavoritesComponent } from './account/favorites/favorites.component';


import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { MovieWindowComponent } from './movies/movie-window/movie-window.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenresComponent,
    LoginComponent,
    SignupComponent,
    CreateMovieComponent,
    CreateCastComponent,
    PurchasesComponent,
    HeaderComponent,
    MovieListComponent,
    NotFoundComponent,
    UpdateMovieComponent,
    MovieDetailComponent,
    FavoritesComponent,
    MovieCardComponent,
    MovieWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
