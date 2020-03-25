import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { MovieCard } from '../shared/models/movie-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: MovieCard[];
  constructor(private movieService: MovieService) { } //dependency injection

  ngOnInit()  //event 
 {
    this.movieService.getTopRevenueMovies().subscribe( //only subscribe to get data due to Observable
      m => {
        this.movies = m;
        console.log('Inside Home Component');
        console.log(this.movies);
        
      }
    );
  } 

}
