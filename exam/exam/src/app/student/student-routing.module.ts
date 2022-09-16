import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentUpdateComponent} from "./student-update/student-update.component";
import {StudentDeleteComponent} from "./student-delete/student-delete.component";
import {StudentCreateComponent} from "./student-create/student-create.component";
import {UploadImageComponent} from "./upload-image/upload-image.component";

const routes: Routes = [
  {path: "create", component: StudentCreateComponent},
  {path: "list", component: StudentListComponent},
  {path: "update/:id", component: StudentUpdateComponent},
  {path: "delete/:id", component: StudentDeleteComponent},
  {path: "upload/image", component: UploadImageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
