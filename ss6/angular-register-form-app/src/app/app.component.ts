import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

function gte(control: AbstractControl):ValidationErrors | null{
  const v=+control.value;

  if (isNaN(v)) {
    return { 'gte': true, 'requiredValue': 10 }
  }

  if (v <= 18) {
    return { 'gte': true, 'requiredValue': 10 }
  }

  return null
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-register-form-app';

  userForm = new FormGroup({
  id: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('',[Validators.required, Validators.minLength(6)]),
  confirm_password: new FormControl('',[Validators.required, Validators.minLength(6)]),
  country: new FormControl('',[Validators.required]),
  age: new FormControl('',[gte]),
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
