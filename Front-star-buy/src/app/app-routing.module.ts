import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { SignupComponent } from './signup/signup.component';
import { UnderNavComponent } from './underNav/underNav.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from "./navbar/navbar.component"
import { MaleComponent } from './male/male.component';
import { FemaleComponent } from './female/female.component';
import { KidsComponent } from './kids/kids.component';
import { AdminDataComponent } from './admin-data/admin-data.component';
<<<<<<< HEAD
// import { AdminDataEditItemComponent } from './admin-edit-item/admin-edit-item.component';
=======
import { AdminDataEditItemComponent } from './admin-edit-item/admin-edit-item.component';
>>>>>>> d134a56c12b5a31b3eabe974282ef6d618fe5dac
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminPartComponent } from './adminPart/adminPart.component';
import { ReviewComponent } from './review/review.component';
import {SigninComponent} from './signin/signin.component';
import {CarousselComponent} from "./caroussel/caroussel.component"
// import { AccessoriesComponent } from './accessories/accessories.component';
// import { ReviewListComponent } from './review-list/review-list.component';
// import { AdminDataComponent } from './admin-data/admin-data.component';
// import { CardComponent } from './card/card.component';
// import { ReviewListComponent } from './review-list/review-list.component';
const routes: Routes = [
  {
    component: NavbarComponent, path: "",
    children: [
      { component: SigninComponent, path: "signin" },
      { component: UnderNavComponent, path: "underNav" },
      { component: HomeComponent, path: "home"},
      { component:ReviewComponent,path:"review"},
      { component: SignupComponent, path: "signup" },
      {component:SigninComponent, path:"signin"},
      // { component:SignupComponent, path: "signup" },
    ]
  },
  { component: PaymentComponent, path: "payment" },
  { component: MaleComponent, path: "male" },
  { component: FemaleComponent, path: "female" },
  { component: KidsComponent, path: "kids" },
  { component: AdminDataComponent, path: "admin-data" },
  { component: AdminPartComponent, path: "admin"} ,
  { component: AdminProductsComponent, path: "admin-products" },
<<<<<<< HEAD
=======
 
>>>>>>> d134a56c12b5a31b3eabe974282ef6d618fe5dac
  // {component:SignupComponent, path:"signup"},
  // {component:UnderNavComponent, path:"underNavComponent"},
  // {component:ReviewComponent,path:"review"},
  // {component:ReviewListComponent,path:"review-list"},
  // {component:AccessoriesComponent, path: "accessories"},
   {component:AdminDataComponent, path: "admin-data"},
<<<<<<< HEAD
=======
   {component:AdminDataEditItemComponent, path: "admin-edit-item/:itemId"},
>>>>>>> d134a56c12b5a31b3eabe974282ef6d618fe5dac
  // {component:CardComponent, path: "card"},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }