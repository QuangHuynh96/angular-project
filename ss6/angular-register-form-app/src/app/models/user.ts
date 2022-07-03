export class User {
  id:number;
  email:string;
  password:string;
  country:string;
  age:number;
  gender:boolean;
  phone:string;


  constructor(id: number, email: string, password: string, country: string, age: number, gender: boolean, phone: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.country = country;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
  }
}
