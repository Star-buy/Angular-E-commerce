import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarousselComponent } from './caroussel.component';



@NgModule({
  declarations: [
    CarousselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarousselComponent
  ]
})
export class CarousselModule { }
