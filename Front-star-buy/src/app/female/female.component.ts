import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import { CommonModule } from '@angular/common';

import axios from 'axios'
>>>>>>> c953bf23297535474f252e26015022dfba74fb2a
@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrls: ['./female.component.css']
})
export class FemaleComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

}
=======
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
>>>>>>> c953bf23297535474f252e26015022dfba74fb2a
