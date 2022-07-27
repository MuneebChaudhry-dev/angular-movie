import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    this.http
      .get('http://localhost:4200/assets/data/trending-movies.json')
      .subscribe(
        (movies) => {
          this.trendingMovies = movies;
        },
        (error) => {
          console.error(error);
        }
      );
  }
  getTheatreMovies() {
    this.http
      .get('http://localhost:4200/assets/data/theatre-movies.json')
      .subscribe(
        (movies) => {
          this.theatreMovies = movies;
        },
        (error) => {
          console.error(error);
        }
      );
  }
  getPopularMovies() {
    this.http
      .get('http://localhost:4200/assets/data/popular-movies.json')
      .subscribe(
        (movies) => {
          this.popularMovies = movies;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
