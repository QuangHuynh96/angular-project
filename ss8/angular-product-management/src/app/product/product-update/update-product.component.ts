import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-update',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id:number = 0;
  public updateProductForm = new FormGroup(
    {
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      description2: new FormGroup({
        id2: new FormControl(),
        name2: new FormControl()
      })
    }
  );

  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
    this.activateRoute.paramMap.subscribe((paraMap:ParamMap)=> {
      // @ts-ignore
      this.id = +paraMap.get("id");
      // @ts-ignore
      let product:Product = this.productService.findData(this.id);
      // @ts-ignore
      this.updateProductForm = new FormGroup({
        // @ts-ignore
        id: new FormControl(product.id),
        // @ts-ignore
        name: new FormControl(product.name),
        // @ts-ignore
        price: new FormControl(product.price),
        // @ts-ignore
        description: new FormControl(product.description),
      })
    })
  }

  ngOnInit(): void {
  }

  public  updateProduct() {
    // @ts-ignore
    const product = this.updateProductForm.value;
    // @ts-ignore
    this.productService.updateDate(product);
    this.router.navigate(["product/list"]);
  }
}
