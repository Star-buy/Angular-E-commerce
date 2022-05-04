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
        'https://reviewed-com-res.cloudinary.com/image/fetch/s--X7McMIEN--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1565980733817/btswardrobe.jpg',
      imageAlt: 'clothing1',
    },
    {
      imageSrc:
        'https://static.fibre2fashion.com/articleresources/images/76/7511/e-commerce-big.jpg',
      imageAlt: 'clothing2',
    },
    {
      imageSrc:
        'https://static.fibre2fashion.com/articleresources/images/47/4642/the-teen-power-teen-models-for-apparel-brand-building.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://static.fibre2fashion.com/articleresources/images/73/7232/The_Teen_Apparel_Market_big.jpg',
      imageAlt: 'person2',
    },
    {
      imageSrc:
        'https://reviewed-com-res.cloudinary.com/image/fetch/s--lzcYa-Hb--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_792/https://reviewed-production.s3.amazonaws.com/attachment/0c94514e5cd34ddd/madewelleverlane.jpg',
      imageAlt: 'person3',
    },
    {
      imageSrc:
        'https://media.kohlsimg.com/is/image/kohls/109088--vn-new',
      imageAlt: 'person4',
    },
    {
      imageSrc:
        'https://img.mensxp.com/media/content/2016/Dec/best-online-shopping-sites-for-men-980x457-1481709884.jpg',
      imageAlt: 'person5',
    },
    {
      imageSrc:
        'https://lerablog.org/wp-content/uploads/2017/12/gegertgr.jpg',
      imageAlt: 'person6',
    },
    {
      imageSrc:
        'https://articlesdir.org/wp-content/uploads/2021/02/best-men-online-shopping-jcrew-luxe-digital.jpg',
      imageAlt: 'person7',
    },
    
  ]
  
}
