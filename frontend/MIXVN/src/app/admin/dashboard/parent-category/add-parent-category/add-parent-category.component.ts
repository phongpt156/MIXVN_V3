import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

import { ParentCategoryService } from 'app/admin/admin-shared/services/parent-category/parent-category.service';

@Component({
  selector: 'mix-add-parent-category',
  templateUrl: './add-parent-category.component.html',
  styleUrls: ['./add-parent-category.component.scss']
})
export class AddParentCategoryComponent implements OnInit {
  addParentCategoryForm: FormGroup;

  constructor(
    public dialogRef: MdDialogRef<AddParentCategoryComponent>,
    private parentCategoryService: ParentCategoryService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addParentCategoryForm = this.fb.group({
      name: ['', Validators.required],
      order: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addParentCategoryForm.valid) {
      const body: any = {};
      body.name = this.addParentCategoryForm.value.name;
      body.order = this.addParentCategoryForm.value.order;

      this.parentCategoryService.add(body)
      .subscribe(res => {
        this.dialogRef.close(true);
      });
    }
  }
}
