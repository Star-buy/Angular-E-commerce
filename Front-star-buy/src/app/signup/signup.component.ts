import { Component, OnInit } from '@angular/core';
import {AuthuserService} from '../services/AuthuserService';
import axios from 'axios'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private aus:AuthuserService) { }

  ngOnInit(): void {
  }
  name=""
  email = ""
  password = ""
  confirmPassword = ""
  GetEmail(event:any){
    this.email = event.target.value
    
    }
    GetPassword(event:any){
      this.password= event.target.value
      }
      GetConfirmPassword(event:any){
       this.confirmPassword = event.target.value
      }
      addUser(f:any){
             let data=f.value
        console.log(data)
              if(this.name && this.email && this.password &&  this.confirmPassword){
                axios
                .post("http://localhost:3000/users/signup", {
                   name : this.name,
                 email : this.email ,
                 password : this.password,
                 confirmPassword :this.confirmPassword
                })
                .then((result) => {
                  alert(result.data)
                  if(result.data === "signup successful"){
                  window.location.href = 'http://localhost:3000/users/Signin'
                  }
                })
                .catch((err) => {
                  console.log(err);
                  alert('registrer failed')
                })}
  //       console.log(this.email) 
  //       console.log(this.password)
  //       console.log(this.confirmPassword)
  //       let data=f.value
  //       console.log(data)
  //       var email = this.email  
  //       var password = this.password
  //       var confirmPassword =this.confirmPassword
  //       axios.post("http://localhost:3000/users/signup", {email,password,confirmPassword}).then(res=> {
  //         console.log(res.data)
      
  //   })
    this.aus.addUser(data).subscribe(data=>{
  
      console.log(data)
  })
  }
    
}
