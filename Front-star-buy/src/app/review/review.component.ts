import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  title = "AngularHttpRequest";
  image=""
  constructor(private http: HttpClient) {
  }
  
  ngOnInit(): void {
  }
  onSelect(event:any){
    if(event.target.files[0]){
     let reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]);
     reader.onload =(event:any)=>{
       this.image =event.target.result;
     }
    }
   }
  onReviewPost(reviews: { name: string, location: string, description: string  ,image:String}) {
    console.log(reviews);
    this.http.post("http://localhost:3000/postreview", reviews)
      .subscribe((res) => {
        console.log(res);
      })
  }
}
