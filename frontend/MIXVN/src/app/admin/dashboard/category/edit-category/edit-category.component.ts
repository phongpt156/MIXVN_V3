import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { CategoryService } from 'app/admin/admin-shared/services/category/category.service';

@Component({
  selector: 'mix-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  editCategoryForm: FormGroup;
  parentCategoryId: number;
  genderId: number;
  category: any = {};

  constructor(
    public dialogRef: MatDialogRef<EditCategoryComponent>,
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.editCategoryForm = this.fb.group({
      name: [''],
      order: ['', [Validators.required]],
      active: [true]
    });

    this.patchValue();
  }

  patchValue() {
    this.editCategoryForm.patchValue({
      name: this.category.name,
      order: this.category.order,
      active: this.category.active
    });
  }

  onSubmit() {
    if (this.editCategoryForm.valid) {
      const body: any = {};

      body.name = this.editCategoryForm.value.name;
      body.order = this.editCategoryForm.value.order;
      body.active = this.editCategoryForm.value.active;
      body.gender = this.genderId;
      body.parent_category = this.parentCategoryId;

      this.categoryService.edit(body, this.category.id)
      .subscribe(res => {
        this.dialogRef.close(true);
      });
    }
  }

}
