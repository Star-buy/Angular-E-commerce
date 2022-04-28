import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewComponent } from './review/review.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AdminDataComponent } from './admin-data/admin-data.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  {component:PaymentComponent,path:""},
  {component:ReviewComponent,path:"review"},
  {component:ReviewListComponent,path:"review-list"},
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
