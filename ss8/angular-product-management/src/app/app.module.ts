import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductService} from "./services/product/product.service";
import {ProductModule} from "./product/product.module";
import {CategoryModule} from "./category/category.module";
import {CategoryService} from "./services/category/category.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CategoryModule
  ],
  providers: [
    ProductService,//DI
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
