import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AngularLoginAppComponent} from "./angular-login-app/angular-login-app.component";
import {AngularRegisterAppComponent} from "./angular-register-app/angular-register-app.component";

const routes: Routes = [
  {path: "login", component: AngularLoginAppComponent},
  {path: "register", component: AngularRegisterAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
