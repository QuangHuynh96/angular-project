import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }

  getAPI():Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8080/api/students/list");// test API
  }

  postAPI(student:Student):Observable<Student[]> {
    return this.http.post<Student[]>("http://localhost:8080/api/students/create", student);
    console.log(student);
  }

  getAPIbyId(id:number): Observable<Student> {
    return this.http.get<Student>(`http://localhost:3000/students/${id}`);
  }

  updateAPI(student:Student): Observable<Student> {
    console.log(student);
    return this.http.put<Student>(`http://localhost:3000/students/${student.id}`,student);
  }

  deleteAPIbyId(id:number):Observable<Student> {
    return this.http.delete<Student>(`http://localhost:8080/api/students/delete/${id}`);
  }

  filterAPIByName(name: string): Observable<Student> {
    return this.http.get<Student>(`http://localhost:3000/students?name_like=${name}`);
  }
}
