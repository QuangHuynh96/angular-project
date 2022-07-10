import { Injectable } from '@angular/core';
import {Category} from "../../models/category";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [];

  constructor(private http: HttpClient) { }

  getAPI():Observable<Category[]> {
    return this.http.get<Category[]>(API_URL +'/categoris');// test API
  }

  postAPI(category:Category):Observable<Category[]> {
    return this.http.post<Category[]>(API_URL + '/categoris', category);
  }

  getAPIbyId(id:number): Observable<Category> {
    return this.http.get<Category>(`${API_URL}/categoris/${id}`);
  }

  updateAPI(id: number, category:Category): Observable<Category> {
    console.log(category);
    return this.http.put<Category>(`${API_URL}/categoris/${id}`, category);
  }

  deleteAPIbyId(id:number):Observable<Category> {
    return this.http.delete<Category>(`${API_URL}/categoris/${id}`);
  }

  getAll() {
    return this.categories;
  }
}
