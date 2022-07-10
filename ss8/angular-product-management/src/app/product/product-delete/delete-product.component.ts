import {Component, Injectable, OnInit} from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
@Injectable()
export class DeleteProductComponent implements OnInit {
  // @ts-ignore
  id:number;
  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute,
              private router: Router) {
    this.activateRoute.paramMap.subscribe((paraMap:ParamMap)=> {
      // @ts-ignore
      this.id = +paraMap.get("id");
    })
  }

  ngOnInit(): void {
    this.deleteProduct();
  }

  deleteProduct() {
    if(window.confirm("Bạn chắc chắn muốn xóa product id: " + this.id)) {
      this.productService.deleteAPIbyId(this.id).subscribe(next => {
      }, error => {
      },// @ts-ignore
          complete => {
        this.router.navigate(["product/list"]);
      });
    }
  }
}
