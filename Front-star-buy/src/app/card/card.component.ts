import { Component, OnInit } from '@angular/core';

import axios from 'axios'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
  this.getData()
  }
  items=[]
  title: any=""
  image=""
  price=""
  id=""
  boolean = false

  async getData() {
    try {
      const response =await axios.get("http://localhost:3000/items/getitem");
  this.items=Object.values(response.data)
  this.title=response.data[0].title 
  this.image=response.data[0].image 
  this.price=response.data[0].price 
  this.id=response.data[0].id 
let data = {
  title:this.title,
  image:this.image,
  price:this.price,
  id:this.id
}
  localStorage.setItem('data',JSON.stringify(data) );

      }
    catch (error) {
      console.log(error);
    }
  }



}
