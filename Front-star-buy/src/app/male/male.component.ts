import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import axios from 'axios'
>>>>>>> c953bf23297535474f252e26015022dfba74fb2a
@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

}
=======
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
>>>>>>> c953bf23297535474f252e26015022dfba74fb2a
