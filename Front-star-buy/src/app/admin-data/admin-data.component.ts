import { Component, OnInit } from '@angular/core';

import axios from 'axios';
import { UsersService } from '../users.service';
=======
import { UsersService } from '../users.service';


@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.css']
})
export class AdminDataComponent implements OnInit {

  public products:any[]= [];
  constructor(
    private userService: UsersService,
  ) {
  }
  ngOnInit(): void {
    this.userService.getAllData()
      .subscribe((data: any) => {
        this.products = data;
        console.log(data)
      },
      (error: any)=>{ console.log(error)}
      );
    }

  public products:any[]= [];
  constructor(
    private userService: UsersService,
    // private http: HttpClient,
    // private router: Router
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
  url:any="url"



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


deleteData(id: any){
  axios.delete(`http://localhost:3000/items/deleteitem/${id}`, {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}}).then((response)=>{alert(response.data) 
  window.location.reload()
  }).catch(error => {console.log(error)})
}

updateproduct(id: any){
 
try {
  let dataa ={
    image: this.url,
    title: this.title,
    price: this.price,
    description: this.description,
    discount: this.discount,
    gender: this.gender,
    stock: this.stock,
    }
axios.put(`http://localhost:3000/items/updateitem/${id}`, dataa, {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}})
 .then(response =>{alert(response.data),window.location.reload()})
  }
catch (error) {
  console.log(error);
}
}

}