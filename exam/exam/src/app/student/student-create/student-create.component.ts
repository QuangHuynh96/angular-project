import { Component, OnInit } from '@angular/core';
import {Group} from "../../models/group";
import {Teacher} from "../../models/teacher";
import {FormControl, FormGroup} from "@angular/forms";
import {StudentService} from "../../services/student/student.service";
import {GroupService} from "../../services/group/group.service";
import {TeacherService} from "../../services/teacher/teacher.service";
import {Router} from "@angular/router";
import {Student} from "../../models/student";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  groups: Group[] = [];
  teachers: Teacher[] = [];
  updateForm = new FormGroup(
    {
      id: new FormControl(),
      name: new FormControl(),
      group: new FormControl(),
      teacher: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
    }
  );
  constructor(
    private studentService: StudentService,
    private groupService: GroupService,
    private teacherService: TeacherService,
    private router: Router) { }

  ngOnInit(): void {
    this.getGroup()
    this.getTeacher()
  }

  compareFnTeacher(t1: Teacher, t2: Teacher): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  compareFnGroup(t1: Teacher, t2: Teacher): boolean {
    return t1 && t2 ? t1.id === t2.id : t1 === t2;
  }

  getGroup() {
    this.groupService.getAPI().subscribe(data => {
      // @ts-ignore
      this.groups = data
      console.log(this.groups)
    }, err => {
      console.log(err)
    })
  }

  getTeacher() {
    this.teacherService.getAPI().subscribe(data => {
      // @ts-ignore
      this.teachers = data
      console.log(this.teachers)
    }, err => {
      console.log(err)
    })
  }

  createStudent() {
    // @ts-ignore
    const student:Student = this.updateForm.value;
    this.studentService.postAPI(student).subscribe(next => {
        this.router.navigate(["student/list"]);
      },
      err => {
        console.log(err)
      });
  }

}
