import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/shared/models/moviedetails';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: MovieDetails;
  id:number;
  date: any;
  constructor(private _Activatedroute: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = +params.get('id');
      this.movieService.getMovieDetails(this.id).subscribe(
        m => {
          this.movie = m;
          this.date = new Date(this.movie.releaseDate).getFullYear();
          console.log('Inside Home Component');
          console.log(this.movie);
        });
    }); 
  }
}


