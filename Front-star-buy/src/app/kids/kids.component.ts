import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

  ngOnInit(): void {
    this.getData()
    }
    items=[]
  
    async getData() {
      try {
        const response =await axios.get("http://localhost:3000/items/getkids");
    this.items=Object.values(response.data)
        }
      catch (error) {
        console.log(error);
      }

}
}