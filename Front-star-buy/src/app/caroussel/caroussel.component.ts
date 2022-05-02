import { Component, Input, OnInit } from '@angular/core';



interface carousselImage{
  imageSrc:string,
  imageAlt:string
}
interface carousselPhotos{
  imageSr:string,
  imageAl:string
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



  //second caroussel 
  @Input() photos:carousselPhotos[]=[]
  @Input() indicato = true;
  @Input() control=true;
  @Input() autoSlid=true;
  @Input() slideInterva = 3000 ;
  selectedInde=0;

  ngOnInite(): void {
    if(this.autoSlid){
      this.autoSlidePhotos();
    }
  }
  //changing of the image every 3 sec
  autoSlidePhotos(){
    setTimeout(()=>{
      this.onNextClic
    },this.slideInterva)

  }
  // by this we sets index of image on dot/indicator click
  selectPhoto(index:number):void{
   this.selectedInde=index;
  }
  onPrevClic() :void{
    if(this.selectedInde===0){
      this.selectedInde=this.photos.length-1;

    }else{
      this.selectedInde--
    }
  }
  onNextClic() :void{
   if(this.selectedInde ===this.photos.length-1){
     this.selectedInde =0;
   }else{
     this.selectedInde++;
   }
  }
}
