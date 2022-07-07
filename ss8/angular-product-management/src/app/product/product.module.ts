import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {CreateProductComponent} from "./product-create/create-product.component";
import {ListProductComponent} from "./product-list/list-product.component";
import {DeleteProductComponent} from "./product-delete/delete-product.component";
import {UpdateProductComponent} from "./product-update/update-product.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    CreateProductComponent,
    ListProductComponent,
    DeleteProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProductModule { }
