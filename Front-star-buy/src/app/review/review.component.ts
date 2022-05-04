import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { FormGroup, FormControl, Validators} from '@angular/forms';


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
  url:any="";
    
seletImage(event:any){
let reader = new FileReader();
reader.readAsDataURL(event.target.files[0])
reader.onload = () =>{
  this.url = reader.result
 }
}

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
         var image = this.url
        const data1 ={
          name:this.getusername(),
          description:description,
          location:location,
          image:this.getuserimage()
        }
         axios.post("http://localhost:3000/reviews/postreview",data1,
         {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}}
         ).then(res=> { 
         
         console.log(res)

       
        })

        
      }
      getuserimage(){
        if(localStorage['token'] ){
        var x= atob(localStorage['token'].split('.')[1]);
        var c =  JSON.parse(x);
            return c.user.image } }
      getusername(){
        if(localStorage['token']){
              var x= atob(localStorage['token'].split('.')[1]);
              var c =  JSON.parse(x);
                  return c.user.name  }}

}
