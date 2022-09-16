import {Student} from "./student";

export class Account {
  user:string;
  password:string;
  student:Student;

  constructor(user: string, password: string, student: Student) {
    this.user = user;
    this.password = password;
    this.student = student;
  }
}
