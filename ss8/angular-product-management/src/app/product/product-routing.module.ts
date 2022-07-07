import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateProductComponent} from "./product-create/create-product.component";
import {DeleteProductComponent} from "./product-delete/delete-product.component";
import {ListProductComponent} from "./product-list/list-product.component";
import {UpdateProductComponent} from "./product-update/update-product.component";

const routes: Routes = [
  {path: "create", component: CreateProductComponent},
  {path: "list", component: ListProductComponent},
  {path: "update/:id", component: UpdateProductComponent},
  {path: "delete/:id", component: DeleteProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
