import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, FormGroupName} from "@angular/forms";
import {Product} from "../../models/product";
import {Category} from "../../models/category";

@Component({
  selector: 'app-product-update',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  // @ts-ignore
  product:Product;
  categoris: Category[] = [];
  public updateProductForm = new FormGroup(
    {
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl(),
      description: new FormControl(),
      category: new FormGroup({
        id: new FormControl(),
        name: new FormControl()
      })
    }
  );

  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
    this.activateRoute.paramMap.subscribe((paraMap:ParamMap)=> {
      // @ts-ignore
      const id =parseInt( +paraMap.get("id"));
      console.log(id);
      this.productService.getAPIbyId(id).subscribe(data => {
        console.log(data)
        this.product = data;
        this.updateProductForm = new FormGroup(
          {
            id: new FormControl(this.product.id),
            name: new FormControl(this.product.name),
            price: new FormControl(this.product.price),
            description: new FormControl(this.product.description),
            category: new FormGroup({
              id: new FormControl(this.product.category.id),
              name: new FormControl(this.product.category.name)
            })
          }
        );
      });
    })
  }

  ngOnInit(): void {
  }

  public  updateProduct() {
    // @ts-ignore
    const product:Product = this.updateProductForm.value;
    this.productService.updateAPI(product.id, product).subscribe(next => {
      window.alert("thêm mới thành công");
        this.router.navigate(["product/list"]);//đường dẫn router của các component
    },
      error => {
      window.alert("xảy ra lỗi.")
      });
  }
}
