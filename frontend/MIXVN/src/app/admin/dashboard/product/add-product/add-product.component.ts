import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { ProductService } from 'app/shared/services/product/product.service';
import { CategoryGroupService } from 'app/shared/services/category-group/category-group.service';
import { SupplierService } from 'app/shared/services/supplier/supplier.service';
import { FeatureService } from 'app/shared/services/feature/feature.service';

import { GENDER } from 'app/shared/constants/constants';

declare var Cropper: any;

@Component({
  selector: 'mix-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, OnDestroy {
  @ViewChild('productImagePreview') productImagePreview;
  addProductForm: FormGroup;
  categories: any[] = [];
  suppliers: any[] = [];
  features: any[] = [];
  gender: any = GENDER;
  cropper: any;
  isSelectImage: boolean = false;
  formData: FormData = new FormData;
  isPending: boolean = false;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private productService: ProductService,
    private categoryGroupService: CategoryGroupService,
    private supplierService: SupplierService,
    private featureService: FeatureService
  ) { }

  ngOnInit() {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      discount: ['', Validators.required],
      category: ['', Validators.required],
      supplier: ['', Validators.required],
      features: [],
      gender: ['', Validators.required],
      active: [true, Validators.required ]
    });

    this.cropper = new Cropper(this.productImagePreview.nativeElement, {
      aspectRatio: 3 / 4,
      viewMode: 1
    });

    this.getSuppliers();
    this.getFeatures();
  }

  ngOnDestroy() {
    this.getProducts();
  }

  getCategories(genderId: number) {
    this.categoryGroupService.getByGender(genderId)
    .subscribe(res => {
      this.categories = [];
      res.data.forEach(categoryGroup => {
        this.categories = this.categories.concat(categoryGroup.categories);
      });
    })
  }

  getSuppliers() {
    this.supplierService.getAll()
    .subscribe(res => {
      this.suppliers = res.data;
    });
  }

  getFeatures() {
    this.featureService.getAll()
    .subscribe(res => {
      this.features = res.data;
    });
  }

  imageUploaded(e) {
    let oFReader = new FileReader();
    
    oFReader.readAsDataURL(e.file);
    oFReader.onload = (oFREvent) => {
      this.cropper.destroy();
      this.isSelectImage = true;
      this.cropper.replace(oFREvent.target['result']);
    }
  }

  imageRemoved(e) {
    this.isSelectImage = false;
    this.cropper.destroy();
  }

  getProducts() {
    this.productService.getAll()
    .subscribe(res => {
      this.productService.products = res.data;
    });
  }

  async onSubmit() {
    if (!this.isPending) {
      if (this.addProductForm.valid && this.isSelectImage) {
        this.isPending = true;
        await this.convertBlob();
        for (let name in this.addProductForm.value) {
          this.formData.append(name, this.addProductForm.value[name]);
        }
        console.log(123);
        this.productService.add(this.formData)
        .subscribe(res => {
          console.log(res);
          this.bsModalRef.hide();
          this.cropper.destroy();
          this.isPending = false;
        });
      }
    }
  }
  
  convertBlob() {
    return new Promise(() => {
      this.cropper.getCroppedCanvas().toBlob((productImage) => {
        this.formData.append('img', productImage);
        console.log(123);
      });
    })
  }
}
