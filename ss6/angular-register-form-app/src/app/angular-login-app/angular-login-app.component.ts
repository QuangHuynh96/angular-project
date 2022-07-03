import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-angular-login-app',
  templateUrl: './angular-login-app.component.html',
  styleUrls: ['./angular-login-app.component.css']
})
export class AngularLoginAppComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]),
    password: new FormControl("", [Validators.minLength(6), Validators.required]),
  })
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    alert("login thành công")
  }
}
