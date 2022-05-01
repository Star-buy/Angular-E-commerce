import { Component, OnInit } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
 
  constructor() {
  }
  
  ngOnInit(): void {
  }

  name =""
  location=""
  description=""

  GetName(event:any){
    this.name = event.target.value
    
    }

    GetLocation(event:any){
      this.location = event.target.value
      
      }

      getDescription(event:any){
        this.description = event.target.value
        
        }
        postReview(f:any){
          let data=f.value

         var name =this.name
         var description =this.description
         var location =this.location
         const token= localStorage.getItem('token')
         console.log(token)
        const data1 ={name:name,description:description,
          location:location}
         axios.post("http://localhost:3000/reviews/postreview",data1,
         {headers:{'Authorization':`Bearer ${token}`}}
         ).then(res=> { 
         
          console.log(data1)
         console.log(res)

       
        })
      }
}
