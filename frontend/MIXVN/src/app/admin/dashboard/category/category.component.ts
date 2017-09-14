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
  parentCategoryId: FormControl = new FormControl('', [Validators.required]);
  genderId: FormControl = new FormControl('', [Validators.required]);
  parentCategoryOrder: FormControl = new FormControl('', [Validators.required]);
  categoryGroupOrder: FormControl = new FormControl('', [Validators.required]);
  categoryName: FormControl = new FormControl('', [Validators.required]);
  categoryActive: FormControl = new FormControl(true, [Validators.required]);
  choosedParentCategoryId: number;
  choosedParentCategory: any;
  choosedGender: any;
  choosedCategoryGroupId: number;
  choosedCategoryId: number;
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
        this.listCollapsed[val.id] = false;
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

  openAddCategoryGroupModal(addCategoryGroupModal: TemplateRef<any>, parentCategory: any, gender: any) {
    this.choosedParentCategory = parentCategory;
    this.choosedGender = gender;
    this.modalRef = this.modalService.show(addCategoryGroupModal);
  }

  openEditCategoryGroupModal(editCategoryGroupModal: TemplateRef<any>, categoryGroup: any, parentCategory: any, gender: any) {
    this.modalRef = this.modalService.show(editCategoryGroupModal);

    this.choosedCategoryGroupId = categoryGroup.id;
    this.categoryGroupOrder.setValue(categoryGroup.order);
    this.parentCategoryId.setValue(parentCategory.id);
    this.genderId.setValue(gender.id);
  }

  openDeleteCategoryGroupModal(deleteCategoryGroupModal: TemplateRef<any>, categoryGroupId: number) {
    this.modalRef = this.modalService.show(deleteCategoryGroupModal);

    this.choosedCategoryGroupId = categoryGroupId;
  }

  addCategoryGroup() {
    if (this.categoryGroupOrder.valid) {
      let body: any = {};

      body.parent_category = this.choosedParentCategory.id;
      body.gender = this.choosedGender.id;
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

  editCategoryGroup() {
    if (this.categoryGroupOrder.valid) {
      let body: any = {};

      body.parent_category = this.parentCategoryId.value;
      body.gender = this.genderId.value;
      body.order = this.categoryGroupOrder.value;
      let categoryGroupId = this.choosedCategoryGroupId;

      this.categoryGroupService.edit(body, categoryGroupId)
      .subscribe(res => {
        this.modalRef.hide();
        this.getCategories();
        this.categoryGroupOrder.reset();
      });
    }
  }

  deleteCategoryGroup() {
    this.categoryGroupService.delete(this.choosedCategoryGroupId)
    .subscribe(res => {
      this.modalRef.hide();
      this.getCategories();
    });
  }

  openAddCategoryModal(addCategoryModal: TemplateRef<any>, categoryGroupId: number) {
    this.modalRef = this.modalService.show(addCategoryModal);

    this.choosedCategoryGroupId = categoryGroupId;
  }

  openEditCategoryModal(editCategoryModal: TemplateRef<any>, categoryGroupId: number, category: any) {
    this.modalRef = this.modalService.show(editCategoryModal);

    this.categoryName.setValue(category.name);
    this.categoryActive.setValue(category.active);
    this.choosedCategoryGroupId = categoryGroupId;
    this.choosedCategoryId = category.id;
  }

  openDeleteCategoryModal(deleteCategoryModal: TemplateRef<any>, categoryId: number) {
    this.modalRef = this.modalService.show(deleteCategoryModal);
    
    this.choosedCategoryId = categoryId;
  }

  addCategory() {
    if (this.categoryName.valid && this.categoryActive.valid) {
      let body: any = {};    
      body.category_group = this.choosedCategoryGroupId;
      body.name = this.categoryName.value;
      body.active = this.categoryActive.value;

      this.categoryService.add(body)
      .subscribe(res => {
        this.modalRef.hide();
        this.getCategories();
        this.categoryName.reset();
        this.categoryActive.setValue(true);
      });
    }
  }

  editCategory() {
    if (this.categoryName.valid && this.categoryActive.valid) {
      let body:any = {};

      body.name = this.categoryName.value;
      body.active = this.categoryActive.value;
      body.category_group = this.choosedCategoryGroupId;

      this.categoryService.edit(body, this.choosedCategoryId)
      .subscribe(res => {
        console.log(res);
        this.modalRef.hide();
        this.getCategories();
        this.categoryName.reset();
        this.categoryActive.setValue(true);
      });
    }
  }

  deleteCategory() {
    this.categoryService.delete(this.choosedCategoryId)
    .subscribe(res => {
      console.log(res);
      this.modalRef.hide();
      this.getCategories();
    });
  }
  
  hiddenParentCategoryModal() {
    this.modalRef.hide();
    this.parentCategoryName.reset();
    this.parentCategoryOrder.reset();
  }

  hiddenCategoryGroupModal() {
    this.modalRef.hide();
    this.parentCategoryId.reset();
    this.genderId.reset();
    this.categoryGroupOrder.reset();
  }

  hiddenCategoryModal() {
    this.modalRef.hide();
    this.categoryName.reset();
    this.categoryActive.reset();
  }
}
