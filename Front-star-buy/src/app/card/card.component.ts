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

  async getData() {
    try {
      const response =await axios.get("http://localhost:3000/items/getitem");
  this.items=Object.values(response.data)
      }
    catch (error) {
      console.log(error);
    }
  }



}
