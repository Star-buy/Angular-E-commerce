import {  Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  public imageSrc: string = '';
  public products:any[]= [];
  public product:any = {} as any;
  public formGroup: any

  
  constructor(
    private userService: UsersService,
    private http: HttpClient,
    private router: Router
  ) { 

  }
  
  ngOnInit(): void {
    this.userService.getAllData()
      .subscribe(data => {
        this.products = data;
        console.log(data)
      },
      (error)=>{ console.log(error)}
      );
    }

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


