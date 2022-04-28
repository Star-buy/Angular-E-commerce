import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessoriesComponent } from './accessories/accessories.component';
import { AdminDataComponent } from './admin-data/admin-data.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { CardComponent } from './card/card.component';


const routes: Routes = [
  {component:AccessoriesComponent, path: "accessories"},
  {component:AdminDataComponent, path: "admin-data"},
  {component:AdminProductsComponent, path: "admin-products"},
  {component:CardComponent, path: "card"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
