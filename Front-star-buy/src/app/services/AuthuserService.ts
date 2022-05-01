import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthuserService {
  constructor(private http:HttpClient) {}
  loginUser(body:any){
 console.log(body)
  return this.http.post('http://localhost:3000/users/login',body)
}


addUser(body:any){
  console.log(body)

  return this.http.post('http://localhost:3000/users/signup',body)
}
}
