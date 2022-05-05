import { Component, OnInit } from '@angular/core';

// import {AuthuserService} from '../services/AuthuserService';
import axios from 'axios'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // constructor( private aus:AuthuserService) {}
  ngOnInit(): void {
  }
  email = ""
  password = ""
GetEmail(event:any){
this.email = event.target.value

}
GetPassword(event:any){
this.password= event.target.value
}

loginUser(f:any){
  
  let data=f.value

  var email = this.email  
  var password = this.password

  axios.post("http://localhost:3000/users/login" , {email,password}).then(res=> { 
localStorage.setItem('token', res.data);


  })
//   this.aus.loginUser(data).subscribe(data=>{
  
//     console.log(data)
// })
}
}
