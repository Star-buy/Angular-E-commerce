import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AdminDataComponent } from './admin-data/admin-data.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { CardComponent } from './card/card.component';
import {SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {  UnderNavComponent } from './underNav/underNav.component';
import {  AdminPartComponent} from './adminPart/adminPart.component';







@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    UnderNavComponent,
    AdminPartComponent,
    AccessoriesComponent,
    AdminDataComponent,
    AdminProductsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
