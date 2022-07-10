import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../models/category";

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  // @ts-ignore
  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      const id =parseInt( +paramMap.get("id"));
      console.log(id)

      this.categoryService.getAPIbyId(id).subscribe(data => {
        const category:Category = data;
        this.categoryForm = new FormGroup({
            id: new FormControl(category.id),
            name: new FormControl(category.name),
          });
        }
      );
    });
  }

  ngOnInit() {
  }

  updateCategory() {
    const category = this.categoryForm.value;
    this.categoryService.updateAPI(category.id,category).subscribe(next => {
      alert('Cập nhật thành công');
    },err => {
    },// @ts-ignore
       complete => {
      this.router.navigate(["category/list"])
    });
  }
}
