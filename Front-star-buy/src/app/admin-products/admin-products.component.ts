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

  }

<<<<<<< HEAD
    url = "../assets";
    onselectFile(e:any){
          if(e.target.files){
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (event:any) => {
              this.url = e.target.result;
            }
          }
    };

    
    createSubmit(){
      this.userService.addProduct(this.product)
      .subscribe(data => {
      console.log(data);
      // this.router.navigate(['/']).then(() => {});
      //this.refreshProduct();
      }, error => { console.log(error);})     
      //console.log(this.product);
    }
}
=======
  getTitle(){
>>>>>>> 5906b69ad3adcb8565af6ed10ce8cacb6528dfa3

    }

  ngOnInit(): void {
    
  }
}