import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import axios from 'axios';
>>>>>>> c953bf23297535474f252e26015022dfba74fb2a
@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent implements OnInit {

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
        const response =await axios.get("http://localhost:3000/items/getkids");
    this.items=Object.values(response.data)
        }
      catch (error) {
        console.log(error);
      }

}
}
>>>>>>> c953bf23297535474f252e26015022dfba74fb2a
