import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../models/category";

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  // @ts-ignore
  category:Category;
  // @ts-ignore
  id: number;

  constructor(private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id)
    });
  }

  ngOnInit() {
    this.getCategoryApi()
  }

  getCategoryApi() {
    this.categoryService.getAPIbyId(this.id).subscribe(next => {
      this.category = next;
    }, error => {
      console.log(error)
    });
  }

  deleteCategory() {
    this.categoryService.deleteAPIbyId(this.category.id).subscribe(next => {}, error => {},
      // @ts-ignore
        complete => {
      this.router.navigate(['/category/list']);
    });
  }
}
