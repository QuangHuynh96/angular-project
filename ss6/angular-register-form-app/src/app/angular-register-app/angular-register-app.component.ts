import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-angular-register-app',
  templateUrl: './angular-register-app.component.html',
  styleUrls: ['./angular-register-app.component.css']
})
export class AngularRegisterAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    id: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirm_password: new FormControl('',[Validators.required, Validators.minLength(6)]),
    country: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required, Validators.min(18)]),
    gender: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required, Validators.pattern(" ^\\+84\\d{9,10}$")])
  })

  get age() {
    return this.userForm.get('age');
  }


  submit() {
    alert("khởi tạo thành công tài khoản: " + this.userForm.value.email)
  }

}
