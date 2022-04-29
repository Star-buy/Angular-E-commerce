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

  ngOnInit(): void {
    this.userService.getAllData()
      .subscribe(data => {
        console.log(data)
      })
  }

}


