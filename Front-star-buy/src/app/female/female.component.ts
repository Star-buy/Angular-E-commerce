import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios'
@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})
export class FemaleComponent implements OnInit {
  ngOnInit(): void {
    this.getData()
    }
    items=[]
    async getData() {
      try {
        const response =await axios.get("http://localhost:3000/items/getfemale");
    this.items=Object.values(response.data)
        }
      catch (error) {
        console.log(error);
      }
}
}