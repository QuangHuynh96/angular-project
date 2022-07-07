import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {
  // @ts-ignore
  categoryForm: FormGroup;
  // @ts-ignore
  id: number;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      const category = this.getCategory(this.id);
      this.categoryForm = new FormGroup({
        // @ts-ignore
        id: new FormControl(category.id),
        // @ts-ignore
        name: new FormControl(category.name),
      });
    });
  }

  ngOnInit() {
  }

  getCategory(id: number) {
    return this.categoryService.findById(id);
  }

  updateCategory(id: number) {
    const category = this.categoryForm.value;
    this.categoryService.updateCategory(id, category);
    alert('Cập nhật thành công');
  }
}
