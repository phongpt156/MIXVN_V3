import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

import { CategoryService } from 'app/admin/admin-shared/services/category/category.service';

@Component({
  selector: 'mix-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  addCategoryForm: FormGroup;
  parentCategoryId: number;
  genderId: number;

  constructor(
    public dialogRef: MdDialogRef<AddCategoryComponent>,
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.addCategoryForm = this.fb.group({
      name: ['', [Validators.required]],
      order: ['', [Validators.required]],
      active: [true, [Validators.required]]
    });
  }

  onSubmit() {
    if (this.addCategoryForm.valid) {
      const body: any = {};

      body.name = this.addCategoryForm.value.name;
      body.order = this.addCategoryForm.value.order;
      body.active = this.addCategoryForm.value.active;
      body.gender = this.genderId;
      body.parent_category = this.parentCategoryId;

      this.categoryService.add(body)
      .subscribe(res => {
        this.dialogRef.close(true);
      });
    }
  }

}
