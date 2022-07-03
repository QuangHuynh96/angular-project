import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AngularLoginAppComponent } from './angular-login-app/angular-login-app.component';
import { AngularRegisterAppComponent } from './angular-register-app/angular-register-app.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularLoginAppComponent,
    AngularRegisterAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
