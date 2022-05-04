import { Component, OnInit } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {

  ngOnInit(): void {
    this.getData()
    }
    manitems=[]
  
    async getData() {
      try {
        const response =await axios.get("http://localhost:3000/items/getmale");
    this.manitems=Object.values(response.data)
        }
      catch (error) {
        console.log(error);
      }
  }

}
