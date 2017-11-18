import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { SetService } from 'app/admin/admin-shared/services/set/set.service';

declare var Cropper: any;

@Component({
  selector: 'mix-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {
  @ViewChild('setImagePreview') setImagePreview;
  addSetForm: FormGroup;
  setImage: File;
  // itemImages: File[] = [];
  itemIds: any[] = [];
  selectedItem: any = {};
  formData: FormData = new FormData;
  isPending = false;
  cropper: any;
  isSelectImage = false;

  constructor(
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
    private setService: SetService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.addSetForm = this.fb.group({
      active: [true, Validators.required],
      items: this.fb.array([])
    });

    this.cropper = new Cropper(this.setImagePreview.nativeElement, {
      aspectRatio: 17 / 4,
      viewMode: 1
    });
  }

  initItem() {
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

  addItem() {
    const control = <FormArray>this.addSetForm.controls.items;
    control.push(this.initItem());
  }

  removeItem(i) {
    const control = <FormArray>this.addSetForm.controls.items;
    control.removeAt(i);
  }

  addItemId(e) {
    if (!this.selectedItem[e.index]) {
      this.itemIds.push(e.itemId);
      this.selectedItem[e.index] = this.itemIds.length;
    } else {
      this.itemIds[this.selectedItem[e.index] - 1] = e.itemId;
    }
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

  // itemImageChange(e) {
  //   this.itemImages[e.index] = e.itemImage;
  // }

  onSubmit() {
    if (!this.isPending) {
      if (this.addSetForm.valid && this.isSelectImage) {
        this.cropper.getCroppedCanvas().toBlob((setImage) => {
          this.formData.append('img', setImage);

          this.isPending = true;
          const valid = true;

          this.formData.append('active', this.addSetForm.value.active);
          this.itemIds.forEach((val, i) => {
            this.formData.append(`itemIds[${i}]`, val);
          });

          // this.addSetForm.controls.items['controls'].forEach((val, i) => {
          //   if (!this.selectedItem[i]) {
          //     if (!this.itemImages[i]) {
          //       valid = false;
          //       this.openSnackBar('Please upload item image');
          //       return;
          //     }

          //     this.formData.append(`items[${i}][img]`, this.itemImages[i], this.itemImages[i].name);
          //     this.formData.append(`items[${i}][name]`, val.value.name);
          //     this.formData.append(`items[${i}][price]`, val.value.price);
          //     this.formData.append(`items[${i}][discount]`, val.value.discount);
          //     this.formData.append(`items[${i}][category]`, val.value.category);
          //     this.formData.append(`items[${i}][supplier]`, val.value.supplier);
          //     this.formData.append(`items[${i}][features]`, val.value.features);
          //     this.formData.append(`items[${i}][active]`, val.value.active);
          //     this.formData.append(`items[${i}][gender]`, val.value.gender);
          //   }
          // });
          if (valid) {
            this.setService.add(this.formData)
            .subscribe(res => {
              console.log(res);
              this.isPending = false;
              this.cropper.destroy();
              this.openSnackBar('Successfully Added New Item Group');
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
    // this.addSetForm.reset();
    // this.addSetForm.controls.active.setValue(true);
    const length = this.addSetForm.controls.items['controls'].length;
    for (let i = length - 1; i > -1; i--) {
      this.removeItem(i);
    }
    this.itemIds = [];
    // this.itemImages = [];
    // this.selectedItem = {};
  }

  openSnackBar(message) {
    this.snackBar.open(message, 'x', {
      duration: 5000,
    });
  }
}
