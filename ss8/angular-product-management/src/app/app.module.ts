import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProductComponent } from './product-create/create-product.component';
import { ListProductComponent } from './product-list/list-product.component';
import {ProductService} from "./services/product.service";
import {ReactiveFormsModule} from "@angular/forms";
import { DeleteProductComponent } from './product-delete/delete-product.component';
import { UpdateProductComponent } from './product-update/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProductComponent,
    ListProductComponent,
    DeleteProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
