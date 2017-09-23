import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { ProductGroupService } from 'app/admin/admin-shared/services/product-group/product-group.service';

declare var Cropper: any;

@Component({
  selector: 'mix-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {
  @ViewChild('productGroupImagePreview') productGroupImagePreview;
  addProductGroupForm: FormGroup;
  productGroupImage: File;
  // productImages: File[] = [];
  productIds: any[] = [];
  selectedProduct: any = {};
  formData: FormData = new FormData;
  isPending = false;
  cropper: any;
  isSelectImage = false;

  constructor(
    public snackBar: MdSnackBar,
    private fb: FormBuilder,
    private productGroupService: ProductGroupService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.addProductGroupForm = this.fb.group({
      active: [true, Validators.required],
      products: this.fb.array([])
    });

    this.cropper = new Cropper(this.productGroupImagePreview.nativeElement, {
      aspectRatio: 21 / 9,
      viewMode: 1
    });
  }

  initProduct() {
    return this.fb.group({
      // name: ['', Validators.required],
      // price: ['', Validators.required],
      // discount: [''],
      // category: ['', Validators.required],
      // supplier: ['', Validators.required],
      // gender: ['', Validators.required],
      // features: [''],
      // active: [true, Validators.required]
    });
  }

  addProduct() {
    const control = <FormArray>this.addProductGroupForm.controls.products;
    control.push(this.initProduct());
  }

  removeProduct(i) {
    const control = <FormArray>this.addProductGroupForm.controls.products;
    control.removeAt(i);
  }

  addProductId(e) {
    if (!this.selectedProduct[e.index]) {
      this.productIds.push(e.productId);
      this.selectedProduct[e.index] = this.productIds.length;
    } else {
      this.productIds[this.selectedProduct[e.index] - 1] = e.productId;
    }
    console.log(this.productIds);    
  }

  imageUploaded(e) {
    const oFReader = new FileReader();

    oFReader.readAsDataURL(e.file);
    oFReader.onload = (oFREvent) => {
      this.cropper.destroy();
      this.isSelectImage = true;
      this.cropper.replace(oFREvent.target['result']);
    }
  }

  imageRemoved() {
    this.isSelectImage = false;
    this.cropper.destroy();
  }

  // productImageChange(e) {
  //   this.productImages[e.index] = e.productImage;
  // }

  onSubmit() {
    if (!this.isPending) {
      if (this.addProductGroupForm.valid && this.isSelectImage) {
        this.cropper.getCroppedCanvas().toBlob((productGroupImage) => {
          this.formData.append('img', productGroupImage);

          this.isPending = true;
          const valid = true;

          this.formData.append('active', this.addProductGroupForm.value.active);
          this.productIds.forEach((val, i) => {
            this.formData.append(`productIds[${i}]`, val);
          });

          // this.addProductGroupForm.controls.products['controls'].forEach((val, i) => {
          //   if (!this.selectedProduct[i]) {
          //     if (!this.productImages[i]) {
          //       valid = false;
          //       this.openSnackBar('Please upload product image');
          //       return;
          //     }

          //     this.formData.append(`products[${i}][img]`, this.productImages[i], this.productImages[i].name);
          //     this.formData.append(`products[${i}][name]`, val.value.name);
          //     this.formData.append(`products[${i}][price]`, val.value.price);
          //     this.formData.append(`products[${i}][discount]`, val.value.discount);
          //     this.formData.append(`products[${i}][category]`, val.value.category);
          //     this.formData.append(`products[${i}][supplier]`, val.value.supplier);
          //     this.formData.append(`products[${i}][features]`, val.value.features);
          //     this.formData.append(`products[${i}][active]`, val.value.active);
          //     this.formData.append(`products[${i}][gender]`, val.value.gender);
          //   }
          // });

          if (valid) {
            this.productGroupService.add(this.formData)
            .subscribe(res => {
              console.log(res);
              this.isPending = false;
              this.cropper.destroy();
              this.openSnackBar('Successfully Added New Product Group');
              this.resetForm();
            });
          }
        });

      } else {
        this.openSnackBar('Please fill in all require field');
        this.isPending = false;
      }
    }
  }

  resetForm() {
    // this.addProductGroupForm.reset();
    // this.addProductGroupForm.controls.active.setValue(true);
    const length = this.addProductGroupForm.controls.products['controls'].length;
    for (let i = length - 1; i > -1; i--) {
      this.removeProduct(i);
    }
    this.productIds = [];
    // this.productImages = [];
    // this.selectedProduct = {};
  }

  openSnackBar(message) {
    this.snackBar.open(message, 'x', {
      duration: 5000,
    });
  }
}
