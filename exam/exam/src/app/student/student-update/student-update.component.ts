import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Group} from "../../models/group";
import {Teacher} from "../../models/teacher";
import {StudentService} from "../../services/student/student.service";
import {GroupService} from "../../services/group/group.service";
import {TeacherService} from "../../services/teacher/teacher.service";
import {Student} from "../../models/student";

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
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
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activateRoute.paramMap.subscribe((paraMap:ParamMap)=> {
      // @ts-ignore
      const id =parseInt( +paraMap.get("id"));
      this.studentService.getAPIbyId(id).subscribe(data => {
          const student:Student = data;
          this.updateForm = new FormGroup({
            id: new FormControl(student.id),
            name: new FormControl(student.name,[Validators.required]),
            group: new FormControl(student.group,[Validators.required]),
            teacher: new FormControl(student.teacher,[Validators.required]),
            email: new FormControl(student.email, [Validators.required,Validators.email]),
            phone: new FormControl(student.phone, [Validators.required,Validators.pattern("[0-9]{10,12}")]),
          })
      })
    })
  }

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
      console.log("grop" +this.groups)
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

  updateStudent() {
    // @ts-ignore
    const student:Student = this.updateForm.value;
    this.studentService.updateAPI(student).subscribe(next => {
        this.router.navigate(["student/list"]);//đường dẫn router của các component
      },
      err => {
        console.log(err)
      });
  }

}
