import {Component, Injectable, OnInit} from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-create',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
@Injectable()
export class CreateProductComponent implements OnInit {
  createProductForm= new FormGroup({
    id: new FormControl(0),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  });
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  submit() {
    const product = this.createProductForm.value;
    this.productService.addData(product);
    this.createProductForm.reset();
  }
}
