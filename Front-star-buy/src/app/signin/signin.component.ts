import { Component, OnInit } from '@angular/core';
// import {AuthuserService} from 'src/app/services/authuserService';
import {AuthuserService} from '../services/AuthuserService';
import axios from 'axios'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private aus:AuthuserService) {}
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
  console.log(this.email) 
  console.log(this.password)
  let data=f.value
  console.log(data)
  var email = this.email  
  var password = this.password
  axios.post("http://localhost:3000/users/login" , {email,password}).then(res=> { 
    console.log(res.data)

if(res.data = "user not found"){

alert("User not found")
}
else 
if(res.data = "Please fill all the fields"){ 


}
else if(res.data == "wrong password"){
  alert ("Wrong password")


}
else if(res.data =="login failed"){


}
else if( res.data == "hi admin"){


}
else if(res.data == "login successful"){
  alert ("login successful")


}
else if(res.data =="not found"){



}

  })
  this.aus.loginUser(data).subscribe(data=>{
  
    console.log(data)
})
}
}
