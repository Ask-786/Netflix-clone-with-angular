import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private movieApiService: MovieApiServiceService) {}

  bannerResults: any = [];
  trendingResult: any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
  }

  bannerData() {
    this.movieApiService.bannerApiData().subscribe((result) => {
      console.log(result);
      this.bannerResults = result.results;
    });
  }

  trendingData() {
    this.movieApiService.trendintApiData().subscribe((result) => {
      console.log(result, 'trending');
      this.trendingResult = result.results;
    });
  }
}
