import { Injectable } from '@angular/core';
import {Product} from "../../models/product";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Category} from "../../models/category";
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //fake API
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 12',
      price: 2400000,
      description: 'New'
    }, {
      id: 2,
      name: 'IPhone 11',
      price: 1560000,
      description: 'Like new'
    }, {
      id: 3,
      name: 'IPhone X',
      price: 968000,
      description: '97%'
    }, {
      id: 4,
      name: 'IPhone 8',
      price: 7540000,
      description: '98%'
    }, {
      id: 5,
      name: 'IPhone 11 Pro',
      price: 1895000,
      description: 'Like new'
    }
  ]
  constructor(private http: HttpClient) { }

  getData() {
    return this.products
  }

  getAPI():Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/categories/list');// test API
  }

  postAPI(product:Product):Observable<Product[]> {
    return this.http.post<Product[]>(API_URL + '/product', product);
  }

  getAPIbyId(id:number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/product/${id}`);
  }

  updateAPI(id: number, product:Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/product/${id}`, product);
  }

  deleteAPIbyId(id:number):Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/product/${id}`);
  }


  addData(product:any) {
    this.products.push(product);
    console.log(product);
    alert("Thêm mới thành công");
  }

  findData(id:number) {
    const product = this.products.find(product => {
      return product.id === id;
    })
    return product;
  }

  deleteData(id:number) {
    this.products = this.products.filter((product)=>{
      return product.id != id;
    })
  }

  updateDate(product:Product) {
    for (let i = 0; i < this.products.length; i++) {
      if(product.id === this.products[i].id) {
       this.products[i] = product;
       alert("Thêm mới thành công")
      }
    }
  }

}
