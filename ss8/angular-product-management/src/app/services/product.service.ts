import { Injectable } from '@angular/core';
import {Product} from "../models/product";

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
  constructor() { }

  getData() {
    return this.products
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
