import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

import { ParentCategoryService } from 'app/admin/admin-shared/services/parent-category/parent-category.service';

@Component({
  selector: 'mix-edit-parent-category',
  templateUrl: './edit-parent-category.component.html',
  styleUrls: ['./edit-parent-category.component.scss']
})
export class EditParentCategoryComponent implements OnInit {
  editParentCategoryForm: FormGroup;
  parentCategory: any;

  constructor(
    public dialogRef: MdDialogRef<EditParentCategoryComponent>,
    private parentCategoryService: ParentCategoryService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.editParentCategoryForm = this.fb.group({
      name: ['', [Validators.required]],
      order: ['', [Validators.required]]
    });

    this.patchValue();
  }

  patchValue() {
    this.editParentCategoryForm.patchValue({
      name: this.parentCategory.name,
      order: this.parentCategory.order
    })
  }

  onSubmit() {
    if (this.editParentCategoryForm.valid) {
      const body: any = {};
      body.name = this.editParentCategoryForm.value.name;
      body.order = this.editParentCategoryForm.value.order;

      this.parentCategoryService.edit(body, this.parentCategory.id)
      .subscribe(res => {
        this.dialogRef.close(true);
      });
    }
  }
}
