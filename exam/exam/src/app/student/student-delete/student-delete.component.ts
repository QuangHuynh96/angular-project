import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {StudentService} from "../../services/student/student.service";

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  // @ts-ignore
  student:Student
  // @ts-ignore
  id:number

  constructor(private studentService: StudentService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
    this.activateRoute.paramMap.subscribe((paraMap:ParamMap)=> {
      // @ts-ignore
       this.id = +paraM ap.get("id");
      console.log(this.id)
      //
      // this.studentService.getAPIbyId(id).subscribe(data => {
      //   this.student = data
      // }, err => {
      //   console.log(err)
      // })
    })
  }

  ngOnInit(): void {
  }

  deleteStudent() {
    this.studentService.deleteAPIbyId(this.id).subscribe(next => {
      }, error => {
      },// @ts-ignore
      complete => {
        this.router.navigate(["student/list"]);
      });
  }
}
