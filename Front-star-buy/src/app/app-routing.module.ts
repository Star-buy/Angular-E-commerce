import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminPartComponent} from './adminPart/adminPart.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {UnderNavComponent} from './underNav/underNav.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AdminDataComponent } from './admin-data/admin-data.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { CardComponent } from './card/card.component';


const routes: Routes = [
  {component:AccessoriesComponent, path: "accessories"},
  {component:AdminDataComponent, path: "admin-data"},
  {component:AdminProductsComponent, path: "admin-products"},
  {component:CardComponent, path: "card"},
  {component:AdminPartComponent, path:"adminPart"},
  {component:SigninComponent, path:"signin"},
  {component:SignupComponent, path:"signup"},
  {component:UnderNavComponent, path:"underNavComponent"},
]





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
