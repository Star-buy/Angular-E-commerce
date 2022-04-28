import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminPartComponent} from './adminPart/adminPart.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {UnderNavComponent} from './underNav/underNav.component';


const routes: Routes = [
  {component:AdminPartComponent, path:"adminPart"},
  {component:SigninComponent, path:"signin"},
  {component:SignupComponent, path:"signup"},
  {component:UnderNavComponent, path:"underNavComponent"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
