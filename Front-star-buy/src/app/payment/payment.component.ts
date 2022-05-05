import { Component, OnInit ,Input} from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
@Input() message: any;

  constructor() { }


  ngOnInit(): void {
    console.log(this.message);
    console.log(this.getdata());
    
  }
  image="https://res.cloudinary.com/dm6yw4dn0/image/upload/v1651744739/trzwnxw92ktydxo53aar.jpg"
  title="JEAN"
  price=1099

  getimage(event: any){
this.image = event.target.value;
  };
  gettitle(event:any){
    this.title = event.target.value
  }
  getprice(event:any){
    this.price = event.target.value
  }


  getdata(){
    if(localStorage['data'] ){
      var x= atob(localStorage['data'].split('.')[1]);
      var c =  JSON.parse(x);
          console.log(x);
           }
       }
  pay(event:any){
    const data2 ={
      image:this.image,
      title:this.title,
      price:this.price,
      quantity:1
    }
    console.log(data2);
    
     axios.post("http://localhost:3000/payment/payitem",data2,
     {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}}

     ).then(response =>{window.location.href = response.data
     }).catch(error =>{console.log(error)})
    
  }

}
