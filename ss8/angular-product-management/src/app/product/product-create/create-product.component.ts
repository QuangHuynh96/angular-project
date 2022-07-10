import {Component, Injectable, OnInit} from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../models/product";
import {Category} from "../../models/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
@Injectable()
export class CreateProductComponent implements OnInit {
  categoris: Category[] = [];
  createProductForm= new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormGroup({
      id:new FormControl,
      name:new FormControl
    })
  });
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    const product = this.createProductForm.value;
    console.log(product);
    // @ts-ignore
    this.productService.postAPI(product).subscribe(data=>{
    this.router.navigate(["product/list"]);
    }, err=> {

    });
    this.createProductForm.reset();
  }
}
