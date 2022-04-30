import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  title = "AngularHttpRequest";
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }
  onReviewPost(reviews: { name: string, location: string, description: string }) {
    console.log(reviews);
    this.http.post("http://localhost:3000/reviews/postreview", reviews)
      .subscribe((res) => {
        console.log(res);
      })
  }
}
