import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DictionaryPageComponent} from "./dictionary-page/dictionary-page.component";
import {DictionaryDetailsComponent} from "./dictionary-details/dictionary-details.component";

const routes: Routes = [
  {path: "",pathMatch: "full",component: DictionaryPageComponent},
  {path: "page",component: DictionaryPageComponent},
  {path: "detail/:word",component: DictionaryDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
