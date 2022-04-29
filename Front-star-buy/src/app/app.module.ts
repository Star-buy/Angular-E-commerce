import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { ReviewComponent } from './review/review.component';
// import { ReviewListComponent } from './review-list/review-list.component';
// import { PaymentComponent } from './payment/payment.component';
// import { PostsComponent } from './posts/posts.component';
// import { AccessoriesComponent } from './accessories/accessories.component';
// import { AdminDataComponent } from './admin-data/admin-data.component';
// import { AdminProductsComponent } from './admin-products/admin-products.component';
// import { CardComponent } from './card/card.component';
// import {SigninComponent } from './signin/signin.component';
// import { SignupComponent } from './signup/signup.component';
// import {  UnderNavComponent } from './underNav/underNav.component';
// import {  AdminPartComponent} from './adminPart/adminPart.component';
// import { FemaleComponent } from './female/female.component';
// import { FooterComponent } from './footer/footer.component';
// import { HomeComponent } from './home/home.component';
// import { KidsComponent } from './kids/kids.component';
// import { MaleComponent } from './male/male.component';
// import { NavbarComponent } from './navbar/navbar.component';
// import { PostComponent } from './post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent 
    // ReviewComponent,
    // ReviewListComponent,
    // PaymentComponent,
    // PostsComponent,
    // AppComponent,
    // SigninComponent,
    // SignupComponent,
    // UnderNavComponent,
    // AdminPartComponent,
    // AccessoriesComponent,
    // AdminDataComponent,
    // AdminProductsComponent,
    // CardComponent,
    // FemaleComponent,
    // FooterComponent,
    // HomeComponent,
    // KidsComponent,
    // MaleComponent,
    // NavbarComponent,
    // PostComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
