import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Student} from "../../models/student";
import {Group} from "../../models/group";
import {Teacher} from "../../models/teacher";
import {StudentService} from "../../services/student/student.service";
import {GroupService} from "../../services/group/group.service";
import {TeacherService} from "../../services/teacher/teacher.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  itemsPerPage: number = 5;
  currentPage: number = 1;
  collection: any[] = this.students;
  searchForm: FormGroup = new FormGroup({
      name: new FormControl("")
    }
  );
  constructor(
    private studentService: StudentService,
  ) { }

  ngOnInit(): void {
    this.getDataByname();
    // this.testGetApiStudent()
  }

  getDataByname() {
    // const name = this.searchForm.value.name;
    this.studentService.getAPI().subscribe(data => {
      // @ts-ignore
      this.students = data
      console.log(this.students)
    }, err => {
      console.log(err)
    })
  }

  testGetApiStudent() {
    this.studentService.getAPI().subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err)
    })
  }

}
