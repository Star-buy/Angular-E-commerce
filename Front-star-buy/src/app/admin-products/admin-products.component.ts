import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  constructor(
    private userService: UsersService
 ) { }
url:any=""
title=""
     
seletImage(event:any){
  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0])
  reader.onload = () =>{
    this.url = reader.result
   }
  }

  getTitle(event:any){
    this.title = event.target.value 
    }

  ngOnInit(): void {
    this.userService.getAllData()
      .subscribe(data => {
        console.log(data)
      })
  }
}


