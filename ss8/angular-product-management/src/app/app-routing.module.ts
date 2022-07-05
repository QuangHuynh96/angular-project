import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateProductComponent} from "./product-create/create-product.component";
import {ListProductComponent} from "./product-list/list-product.component";
import {UpdateProductComponent} from "./product-update/update-product.component";
import {DeleteProductComponent} from "./product-delete/delete-product.component";

const routes: Routes = [
  {path: "product/create", component: CreateProductComponent},
  {path: "product/list", component: ListProductComponent},
  {path: "product/update/:id", component: UpdateProductComponent},
  {path: "product/delete/:id", component: DeleteProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
