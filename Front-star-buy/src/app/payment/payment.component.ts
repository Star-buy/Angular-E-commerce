import { Component, OnInit ,Input} from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
@Input() item: any;

  constructor() { }


  ngOnInit(): void {
  }
  image=""
  title=""
  price=""
  quantity=""

  getimage(event: any){
this.image = event.target.value;
  };
  gettitle(event:any){
    this.title = event.target.value
  }
  getprice(event:any){
    this.price = event.target.value
  }
  getquantity(event:any){
    this.quantity = event.target.value
  }


  pay(f:any){
    let data=f.value
    const data2 ={
      image:this.image,
      title:this.title,
      price:this.price,
      quantity:this.quantity
    }
    // axios.post("http://localhost:3000/payment/payitem",data2,
    // {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}}

    // ).then(response =>{console.log(response.data);
    // }).catch(error =>{console.log(error)})
    console.log(data2);
    
  }

}
