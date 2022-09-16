import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentRoutingModule} from "./student-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxPaginationModule} from "ngx-pagination";
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import {StudentListComponent} from "./student-list/student-list.component";
import {StudentUpdateComponent} from "./student-update/student-update.component";



@NgModule({
  declarations: [
    StudentDeleteComponent,
    StudentCreateComponent,
    StudentListComponent,
    StudentUpdateComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class StudentModule { }
