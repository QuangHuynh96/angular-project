import {Teacher} from "./teacher";
import {Group} from "./group";

export class Student {
  id:number;
  name:string;
  email:string;
  phone:number;
  group:Group;
  teacher:Teacher;


  constructor(id: number, name: string, email: string, phone: number, group: Group, teacher: Teacher) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.group = group;
    this.teacher = teacher;
  }
}
