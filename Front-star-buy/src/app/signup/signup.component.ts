import { Component, OnInit } from '@angular/core';

import axios from 'axios'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  constructor( ) { }
  
  ngOnInit(): void {
  }

  email = ""
  password = ""
  userName=""
  confirmPassword = ""


  GetEmail(event:any){
    this.email = event.target.value
    
    }

    GetPassword(event:any){
      this.password= event.target.value
      }

      GetuserName(event:any){
        this.userName= event.target.value
      }

      GetconfirmPassword(event:any){
        this.confirmPassword= event.target.value
      }


      addUser(f:any){
  
        let data=f.value
      
        var email = this.email  
        var password = this.password
        var userName = this.userName
        var confirmPassword = this.confirmPassword
        console.log(email,password,userName,confirmPassword)
        axios.post("http://localhost:3000/users/signup" , {email:email,password:password,username:userName,confirmPassword :confirmPassword}).then(res=> { 
        console.log(email,password,userName,confirmPassword)

          
      
          console.log(res)

        })
     
      }
      } 

