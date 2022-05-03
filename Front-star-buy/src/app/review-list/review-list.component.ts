import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})

export class ReviewListComponent implements OnInit {
  reviewdata: any;
  constructor(private userService: UsersService) {
    this.getAllReviews()
  }
  
  ngOnInit(): void {
    this.getAllReviews()
  }
  fetchdata(){
    this.getAllReviews()
  }
  getAllReviews() {
    this.userService.getAllReviews()
      .subscribe(data => {
        this.reviewdata = data;
        console.log(data)
      })
  }
}
