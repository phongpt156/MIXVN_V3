import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { ParentCategoryService } from 'app/admin/admin-shared/services/parent-category/parent-category.service';

@Component({
  selector: 'mix-delete-parent-category',
  templateUrl: './delete-parent-category.component.html',
  styleUrls: ['./delete-parent-category.component.scss']
})
export class DeleteParentCategoryComponent implements OnInit {
  parentCategoryId: number;

  constructor(
    public dialogRef: MdDialogRef<DeleteParentCategoryComponent>,
    private parentCategoryService: ParentCategoryService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.parentCategoryService.delete(this.parentCategoryId)
    .subscribe(res => {
      this.dialogRef.close(true);
    });
  }
}
