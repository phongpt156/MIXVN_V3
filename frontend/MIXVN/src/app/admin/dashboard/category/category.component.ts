import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormControl, Validators } from '@angular/forms';

import { CategoryService } from 'app/shared/services/category/category.service';
import { ParentCategoryService } from 'app/shared/services/parent-category/parent-category.service';
import { CategoryGroupService } from 'app/shared/services/category-group/category-group.service';

import { GENDER } from 'app/shared/constants/constants';

@Component({
  selector: 'mix-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  listCollapsed: any = {};
  modalRef: BsModalRef;
  parentCategoryName: FormControl = new FormControl('', [Validators.required]);
  parentCategoryOrder: FormControl = new FormControl('', [Validators.required]);
  categoryGroupOrder: FormControl = new FormControl('', [Validators.required], )
  choosedParentCategoryId: number;
  choosedParentCategory: any;
  choosedGenderId: number;
  gender: any = GENDER;

  constructor(
    private categoryService: CategoryService,
    private parentCategoryService: ParentCategoryService,
    private categoryGroupService: CategoryGroupService,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
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

  openEditParentCategory(editParentCategoryModal: TemplateRef<any>, e: any,parentCategory: any) {
    e.stopPropagation();
    this.modalRef = this.modalService.show(editParentCategoryModal);
    this.parentCategoryName.setValue(parentCategory.name);
    this.parentCategoryOrder.setValue(parentCategory.order);
    this.choosedParentCategoryId = parentCategory.id;
  }

  openDeleteParentCategory(deleteParentCategoryModal: TemplateRef<any>, e: any, parentCategoryId: number) {
    e.stopPropagation();
    this.modalRef = this.modalService.show(deleteParentCategoryModal);
    this.choosedParentCategoryId = parentCategoryId;
  }

  addParentCategory() {
    if (this.parentCategoryName.valid && this.parentCategoryOrder.valid) {
      let body: any = {};
      body.name = this.parentCategoryName.value;
      body.order = this.parentCategoryOrder.value;

      this.parentCategoryService.add(body)
      .subscribe(res => {
        this.modalRef.hide();
        this.getCategories();
        this.parentCategoryName.reset();
        this.parentCategoryOrder.reset();
      });
    }
  }

  deleteParentCategory() {
    this.parentCategoryService.delete(this.choosedParentCategoryId)
    .subscribe(res => {
      this.modalRef.hide();
      this.getCategories();
    });
  }

  editParentCategory() {
    if (this.parentCategoryName.valid && this.parentCategoryOrder.valid) {
      let body: any = {};
      body.name = this.parentCategoryName.value;
      body.order = this.parentCategoryOrder.value;

      this.parentCategoryService.edit(body, this.choosedParentCategoryId)
      .subscribe(res => {
        this.modalRef.hide();
        this.getCategories();
        this.parentCategoryName.reset();
        this.parentCategoryOrder.reset();
      });
    }
  }

  openAddCategoryGroupModal(addCategoryGroupModal: TemplateRef<any>, e, parentCategory: any, genderId: number) {
    e.stopPropagation();
    this.choosedParentCategory = parentCategory;
    this.choosedGenderId = genderId;
    this.modalRef = this.modalService.show(addCategoryGroupModal);
  }

  addCategoryGroup() {
    if (this.categoryGroupOrder.valid) {
      let body: any = {};

      body.parent_category = this.choosedParentCategory.id;
      body.gender = this.choosedGenderId;
      body.order = this.categoryGroupOrder.value;

      this.categoryGroupService.add(body)
      .subscribe(res => {
        console.log(res);
        this.modalRef.hide();
        this.getCategories();
        this.categoryGroupOrder.reset();
      });
    }
  }
}
