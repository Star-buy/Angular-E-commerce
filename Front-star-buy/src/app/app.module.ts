import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
import { FormsModule } from '@angular/forms';
// import { ServicesComponent } from './services/AuthuserService';
import { HttpClientModule} from '@angular/common/http'

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
    // ServicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
