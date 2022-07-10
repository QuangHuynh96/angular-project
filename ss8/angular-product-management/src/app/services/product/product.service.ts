import { Injectable } from '@angular/core';
import {Product} from "../../models/product";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getAPI():Observable<Product[]> {
    return this.http.get<Product[]>(API_URL +'/products');// test API
  }

  postAPI(product:Product):Observable<Product[]> {
    return this.http.post<Product[]>(API_URL + '/products', product);
  }

  getAPIbyId(id:number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/products/${id}`);
  }

  updateAPI(id: number, product:Product): Observable<Product> {
    console.log(product);
    return this.http.put<Product>(`${API_URL}/products/${id}`, product);
  }

  deleteAPIbyId(id:number):Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/products/${id}`);
  }
}
