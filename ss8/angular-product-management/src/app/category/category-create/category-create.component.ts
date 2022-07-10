import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit() {
  }

  submit() {
    const category = this.categoryForm.value;

    this.categoryService.postAPI(category).subscribe(next => {
      window.alert("Thêm mới category thành công")
    },err => {
        window.alert("Thêm mới category khôn thành công")
    },// @ts-ignore
       complete => {
      this.router.navigate(["category/list"]);
      this.categoryForm.reset();
    });

  }
}
