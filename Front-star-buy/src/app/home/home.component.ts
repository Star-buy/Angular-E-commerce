import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [
    {
      imageSrc:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/super-weekend-discount-sale-promo-special-ad-design-template-8534c64327a8a8a2a5e7ad15f12a340b.jpg?ts=1569260406',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://www.paydollar.com.cn/en/images/creditcard-img1-china.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://www-cdn.bigcommerce.com/assets/06-ValProp4.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://www-cdn.bigcommerce.com/assets/04-ValProp2.jpg',
      imageAlt: 'person2',
    },
  ]
  photos = [
    {
      imageSr:
        'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/super-weekend-discount-sale-promo-special-ad-design-template-8534c64327a8a8a2a5e7ad15f12a340b.jpg?ts=1569260406',
      imageAl: 'nature1',
    },
    {
      imageSr:
        'https://www.paydollar.com.cn/en/images/creditcard-img1-china.jpg',
      imageAl: 'nature2',
    },
    {
      imageSr:
        'https://www-cdn.bigcommerce.com/assets/06-ValProp4.jpg',
      imageAl: 'person1',
    },
    {
      imageSr:
        'https://www-cdn.bigcommerce.com/assets/04-ValProp2.jpg',
      imageAl: 'person2',
    },
  ]
}
