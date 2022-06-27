import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ArticleimplComponent} from "../article/articleimpl/articleimpl.component";
import {FormsModule} from "@angular/forms";
import {LikeComponent} from "../like/like/like.component";
import {FooterComponent} from "../footer/footer/footer.component";
import {NavbarComponent} from "../navbar/navbar/navbar.component";

@NgModule({
    declarations: [
        AppComponent,
        ArticleimplComponent,
        LikeComponent,
        FooterComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
  exports: [
    NavbarComponent,
    FooterComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
