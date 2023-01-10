import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private movieApiService: MovieApiServiceService) {}

  searchForm = new FormGroup({ movieName: new FormControl(null) });
  searchResult: any;

  submitForm() {
    this.movieApiService
      .getSearchedMovies(this.searchForm.value)
      .subscribe((result) => {
        this.searchResult = result.results;
      });
  }
}
