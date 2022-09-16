import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Group} from "../../models/group";

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private http : HttpClient) { }

  getAPI():Observable<Group[]> {
    return this.http.get<Group[]>("http://localhost:8080/api/groups");// test API
  }
}
