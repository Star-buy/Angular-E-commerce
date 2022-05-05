import {  Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import axios from 'axios';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  // public imageSrc: string = '';
  // public products:any[]= [];
  // public product:any = {} as any;
  // public formGroup: any

  
  constructor(
    // private userService: UsersService,
    // private http: HttpClient,
    // private router: Router
  ) { 

  }
  
  ngOnInit(): void {
    // this.userService.getAllData()
    //   .subscribe(data => {
    //     this.products = data;
    //     console.log(data)
    //   },
    //   (error)=>{ console.log(error)}
    //   );
    }

title=""
price=""
description=""
url:any=""
discount=""
gender=""
stock=""

getTitle(event:any){
  this.title= event.target.value
  }
  getPrice(event:any){
    this.price= event.target.value
    }
    getDescription(event:any){
      this.description= event.target.value
      }
      getGender(event:any){
        this.gender= event.target.value
        }
        getStock(event:any){
          this.stock= event.target.value
          }
          getDiscount(event:any){
            this.discount= event.target.value
            }

            seletImage(event:any){
              let reader = new FileReader();
              reader.readAsDataURL(event.target.files[0])
              reader.onload = () =>{
                this.url = reader.result
               }
              }
              


    // url = "../assets";
    // onselectFile(e:any){
    //       if(e.target.files){
    //         var reader = new FileReader();
    //         reader.readAsDataURL(e.target.files[0]);
    //         reader.onload = (event:any) => {
    //           this.url = e.target.result;
    //         }
    //       }
    // };

    
    // createSubmit(){
    //   this.userService.addProduct(this.product)
    //   .subscribe(data => {
    //   console.log(data);
    //   // this.router.navigate(['/']).then(() => {});
    //   //this.refreshProduct();
    //   }, error => { console.log(error);})     
    //   //console.log(this.product);
    // }

addproduct(){
  let dataa ={
  image: this.url,
  title: this.title,
  price: this.price,
  description: this.description,
  discount: this.discount,
  gender: this.gender,
  stock: this.stock,
  }
  
axios.post('http://localhost:3000/items/postitem', dataa, {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}})
.then(response => {alert(response.data);
}).catch(error => {console.log(error)})
}

}

