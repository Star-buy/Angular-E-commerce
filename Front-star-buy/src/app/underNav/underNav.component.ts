import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-underNav',
  templateUrl: './underNav.component.html',
  styleUrls: ['./underNav.component.css']
})

export class UnderNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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