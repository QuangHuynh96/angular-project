import {Component, Injectable, OnInit} from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {Product} from "../../models/product";
import {Category} from "../../models/category";

@Component({
  selector: 'app-product-list',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
@Injectable()
export class ListProductComponent implements OnInit {
  products: Product[] = [];
  categoris: Category[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData() {
    this.productService.getAPI().subscribe((data) => {
      this.products = data;
      console.log(this.products)
      }, (error) => {
        console.log(error);
      }
    )
  }
}
