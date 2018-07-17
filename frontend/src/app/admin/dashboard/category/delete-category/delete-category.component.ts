import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { CategoryService } from 'app/admin/admin-shared/services/category/category.service';

@Component({
  selector: 'mix-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit {
  id: number;

  constructor(
    public dialogRef: MatDialogRef<DeleteCategoryComponent>,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.categoryService.delete(this.id)
    .subscribe(res => {
      this.dialogRef.close(true);
    });
  }
}
