import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UnderNavComponent } from './underNav/underNav.component';
import { CardComponent } from './card/card.component';
import { PaymentComponent } from './payment/payment.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewComponent } from './review/review.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AdminDataComponent } from './admin-data/admin-data.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminPartComponent } from './adminPart/adminPart.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
<<<<<<< HEAD
import {FemaleComponent} from './female/female.component';
import {MaleComponent} from './male/male.component';
import {KidsComponent} from './kids/kids.component';
=======
import { FemaleComponent } from './female/female.component';
import {MaleComponent} from './male/male.component'
import {KidsComponent} from './kids/kids.component'
>>>>>>> d134a56c12b5a31b3eabe974282ef6d618fe5dac
import { CarousselComponent } from './caroussel/caroussel.component';
import { Caroussel2Component } from './caroussel2/caroussel2.component';
import { Home2Component } from './home2/home2.component';

// import { ServicesComponent } from './services/AuthuserService';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UnderNavComponent,
    HomeComponent,
    CardComponent,
    PaymentComponent,
    FooterComponent,
    AdminPartComponent,
    AccessoriesComponent,
    AdminDataComponent,
    AdminProductsComponent,
    ReviewComponent,
    ReviewListComponent,
    SigninComponent,
    SignupComponent,

    FemaleComponent,
    MaleComponent,
    KidsComponent,

    CarousselComponent,
    Caroussel2Component,
<<<<<<< HEAD
    Home2Component,
    FemaleComponent,
    MaleComponent,
    KidsComponent
=======
    Home2Component

>>>>>>> d134a56c12b5a31b3eabe974282ef6d618fe5dac
    // ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxStarRatingModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
