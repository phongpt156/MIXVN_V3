import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MdDialog } from '@angular/material';

import { CategoryService } from 'app/admin/admin-shared/services/category/category.service';

import { GENDER } from 'app/shared/constants/constants';

import { AddCategoryComponent } from './add-category/add-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { AddParentCategoryComponent } from '../parent-category/add-parent-category/add-parent-category.component';
import { EditParentCategoryComponent } from '../parent-category/edit-parent-category/edit-parent-category.component';
import { DeleteParentCategoryComponent } from '../parent-category/delete-parent-category/delete-parent-category.component';

@Component({
  selector: 'mix-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  listCollapsed: any = {};
  dialogRef: any;
  parentCategoryId: FormControl = new FormControl('', [Validators.required]);
  genderId: FormControl = new FormControl('', [Validators.required]);
  choosedParentCategoryId: number;
  choosedParentCategory: any;
  choosedGender: any;
  choosedCategoryId: number;
  gender: any = GENDER;

  constructor(
    public dialog: MdDialog,
    private categoryService: CategoryService,
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories()
    .subscribe(res => {
      this.categories = res.data;
      this.categories.forEach(val => {
        this.listCollapsed[val.id] = false;
      });
    });
  }

  openAddParentCategoryDialog() {
    this.dialogRef = this.dialog.open(AddParentCategoryComponent);

    this.dialogRef.afterClosed()
    .subscribe(isAdd => {
      if (isAdd) {
        this.getCategories();
      }
    });
  }

  openEditParentCategoryDialog(e: any, parentCategory: any) {
    e.stopPropagation();
    this.dialogRef = this.dialog.open(EditParentCategoryComponent);

    this.dialogRef.componentInstance.parentCategory = parentCategory;

    this.dialogRef.afterClosed()
    .subscribe(isEdit => {
      if (isEdit) {
        this.getCategories();
      }
    });
  }

  openDeleteParentCategoryDialog(e: any, parentCategoryId: number) {
    e.stopPropagation();
    this.dialogRef = this.dialog.open(DeleteParentCategoryComponent);

    this.dialogRef.componentInstance.parentCategoryId = parentCategoryId;

    this.dialogRef.afterClosed()
    .subscribe(isDelete => {
      if (isDelete) {
        this.getCategories();
      }
    });
  }

  openAddCategoryDialog(parentCategoryId: number, genderId: number) {
    this.dialogRef = this.dialog.open(AddCategoryComponent);

    this.dialogRef.componentInstance.parentCategoryId = parentCategoryId;
    this.dialogRef.componentInstance.genderId = genderId;

    this.dialogRef.afterClosed()
    .subscribe(isAdd => {
      if (isAdd) {
        this.getCategories();
      }
    });
  }

  openEditCategoryDialog(category: any, parentCategoryId: number, genderId: number) {
    this.dialogRef = this.dialog.open(EditCategoryComponent);

    this.dialogRef.componentInstance.category = category;
    this.dialogRef.componentInstance.parentCategoryId = parentCategoryId;
    this.dialogRef.componentInstance.genderId = genderId;

    this.dialogRef.afterClosed()
    .subscribe(isEdit => {
      if (isEdit) {
        this.getCategories();
      }
    })
  }

  openDeleteCategoryDialog(categoryId: number) {
    this.dialogRef = this.dialog.open(DeleteCategoryComponent);

    this.dialogRef.componentInstance.id = categoryId;

    this.dialogRef.afterClosed()
    .subscribe(isDelete => {
      if (isDelete) {
        this.getCategories();
      }
    })
  }
}
