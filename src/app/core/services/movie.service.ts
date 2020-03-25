import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { MovieCard } from 'src/app/shared/models/movie-card';
import { Observable } from 'rxjs';
import { MovieDetails } from 'src/app/shared/models/moviedetails';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService:ApiService) { }

  getTopRevenueMovies():Observable<MovieCard[]>
  {
    return this.apiService.getAll('/movies/toprevenue') //this(talking to back-end) is nothing related the path in app.routing(for front-end)

  }

  getMovieDetails(id:number):Observable<MovieDetails>
  {
    return this.apiService.getOne(`${'/movies/'}${id}`)
  }

  getMoviesByGenre(genreId: number): Observable<MovieCard[]> {
    return this.apiService.getAll(`${'/movies/genre/'}${genreId}`);
  }
}
