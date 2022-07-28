import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
interface Review {
  name: string;
  content: string;
  date: Date;
  rating: string;
}
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  type: string = '';
  id: string = '';
  url: string = '';
  movies: any;
  movie: any;

  reviewRating: string = '';
  username = '';
  reviewTaken = '';
  reviews: Review[] = [];
  errorMsg: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];
    if (this.type === 'trending') {
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    } else if (this.type === 'theatre') {
      this.url = 'http://localhost:4200/assets/data/theatre-movies.json';
    } else if (this.type === 'popular') {
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }
    this.getMovie();
  }

  getMovie() {
    this.http.get(this.url).subscribe((movies) => {
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie: { id: string }) => movie.id == this.id
      );
      if (index > -1) {
        this.movie = this.movies[index];
      }
    });
  }

  setReview() {
    if (this.username.trim().length === 0) {
      this.errorMsg = 'Username is required';
    } else if (this.errorMsg === '') {
      let review: Review = {
        name: this.username,
        content: this.reviewTaken,
        date: new Date(),
        rating: this.reviewRating,
      };
      this.reviews.push(review);
      console.log(this.reviews);
    }
  }
}
