import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [
    {
      imageSrc:
        'https://img.freepik.com/free-vector/e-commerce-concept-delivery-service-mobile-application-transpotation-food-delivery-by-scooter_68971-359.jpg?w=2000',
      imageAlt: 'delivery1',
    },
    {
      imageSrc:
        'https://www.paydollar.com.cn/en/images/creditcard-img1-china.jpg',
      imageAlt: 'visaCard',
    },
    {
      imageSrc:
        'https://www.en.presentation-cv-simple.com/wp-content/uploads/2020/03/Resume-profile-Customer-Service-examples.jpg',
      imageAlt: 'service',
    },
  ]
}
