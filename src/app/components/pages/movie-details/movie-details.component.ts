import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  constructor(
    private movieApiService: MovieApiServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  movieDetails: any;
  movieVideo: any;
  movieCast: any;

  ngOnInit() {
    const paramId = this.activatedRoute.snapshot.paramMap.get('id');
    this.getMovieDetails(paramId);
    this.getMovieVideo(paramId);
    this.getMovieCast(paramId);
  }

  getMovieDetails(id: any) {
    this.movieApiService.getMovieDetails(id).subscribe((result) => {
      this.movieDetails = result;
    });
  }

  getMovieVideo(id: any) {
    this.movieApiService.getMovieVideo(id).subscribe((result) => {
      result.results.forEach((el: any) => {
        if (el.type == 'Trailer') {
          this.movieVideo = el.key;
        }
      });
    });
  }

  getMovieCast(id: any) {
    this.movieApiService.getMovieCast(id).subscribe((result) => {
      this.movieCast = result;
    });
  }
}
