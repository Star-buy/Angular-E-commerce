import { Component, Input, OnInit } from '@angular/core';

interface carousselImage{
  imageSrc:string,
  imageAlt:string
}

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css'],
 
})
export class CarousselComponent implements OnInit {
  
  constructor() {
   
   }
  
  @Input() images:carousselImage[]=[]
  @Input() indicator = true;
  @Input() controls=true;
  @Input() autoSlide=true;
  @Input() slideInterval = 3000 ;
  selectedIndex=0;

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }
  //changing of the image every 3 sec
  // for some reason the autoslide didnt work i spend a lot of time working on it and didnt get why:(
  autoSlideImages(){
    setTimeout(()=>{
      this.onNextClick
    },this.slideInterval)

  }
  // by this we sets index of image on dot/indicator click
  selectImage(index:number):void{
   this.selectedIndex=index;
  }
  onPrevClick() :void{
    if(this.selectedIndex===0){
      this.selectedIndex=this.images.length-1;

    }else{
      this.selectedIndex--
    }
  }
  onNextClick() :void{
   if(this.selectedIndex ===this.images.length-1){
     this.selectedIndex =0;
   }else{
     this.selectedIndex++;
   }
  }

}
