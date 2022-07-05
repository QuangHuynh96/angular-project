import {Component, Injectable, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
@Injectable()
export class ListProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.products = this.productService.getData();
  }
}
