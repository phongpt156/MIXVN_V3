import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormControl, Validators } from '@angular/forms';

import { CategoryService } from 'app/shared/services/category/category.service';
import { ParentCategoryService } from 'app/shared/services/parent-category/parent-category.service';

@Component({
  selector: 'mix-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  listCollapsed: any = {};
  modalRef: BsModalRef;
  parentCategoryName: FormControl = new FormControl(123, [Validators.required]);
  parentCategoryOrder: FormControl = new FormControl(456, [Validators.required]);

  constructor(
    private categoryService: CategoryService,
    private parentCategoryService: ParentCategoryService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories()
    .subscribe(res => {
      this.categories = res.data;
      this.categories.forEach(val => {
        this.listCollapsed[val.id] = true;
      });
    });
  }

  openAddParentCategory(addParentCategoryModal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(addParentCategoryModal);
  }

  openEditParentCategory(editParentCategoryModal: TemplateRef<any>, e: any) {
    e.stopPropagation();
    this.modalRef = this.modalService.show(editParentCategoryModal);
  }

  openDeleteParentCategory(deleteParentCategoryModal: TemplateRef<any>, e: any) {
    e.stopPropagation();
    this.modalRef = this.modalService.show(deleteParentCategoryModal);
  }

  addParentCategory() {
    let body: any = {};
    body.name = this.parentCategoryName;
    body.order = this.parentCategoryOrder;

    this.parentCategoryService.addParentCategory(body)
    .subscribe(res => {
      console.log(res);
    });
  }
}
