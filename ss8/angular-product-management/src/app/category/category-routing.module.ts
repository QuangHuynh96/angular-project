import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryCreateComponent} from "./category-create/category-create.component";
import {CategoryDeleteComponent} from "./category-delete/category-delete.component";
import {CategoryUpdateComponent} from "./category-update/category-update.component";
import {CategoryListComponent} from "./category-list/category-list.component";

const routes: Routes = [
  {path: "create", component: CategoryCreateComponent},
  {path: "list", component: CategoryListComponent},
  {path: "update/:id", component: CategoryUpdateComponent},
  {path: "delete/:id", component: CategoryDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
