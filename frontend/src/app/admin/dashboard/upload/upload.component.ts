import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { SetService } from 'app/admin/admin-shared/services/set/set.service';
import { CollectionService } from 'app/admin/admin-shared/services/collection/collection.service';

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
  formData: FormData = new FormData;
  isPending = false;
  cropper: any;
  isSelectImage = false;
  collections: any[] = [];

  constructor(
    public snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private setService: SetService,
    private collectionService: CollectionService,
  ) { }

  ngOnInit() {
    this.addSetForm = this.fb.group({
      active: [true, Validators.required],
      items: this.fb.array([]),
      collection: ['']
    });

    this.cropper = new Cropper(this.setImagePreview.nativeElement, {
      aspectRatio: 3 / 4,
      viewMode: 1,
      checkOrientation: false
    });

    this.collectionService.getAll()
    .subscribe(res => {
      this.collections = res.data;
    });
  }

  initItem() {
    return this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
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

  imageUploaded(e) {
    const oFReader = new FileReader();
    
    oFReader.readAsDataURL(e.file);
    oFReader.onload = (oFREvent) => {
      console.log(oFREvent.target['result']);
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
          this.formData.append('collection_id', this.addSetForm.value.collection);

          let tag = '';

          this.addSetForm.value.items.forEach((val, i) => {
            tag += val.name + ',';
            this.formData.append(`items[${i}]`, val.id);
          });

          this.formData.append('tag', tag);

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
    this.addSetForm.reset();
    this.addSetForm.controls.active.setValue(true);
    const length = this.addSetForm.controls.items['controls'].length;
    for (let i = length - 1; i > -1; i--) {
      this.removeItem(i);
    }
  }

  openSnackBar(message) {
    this.snackBar.open(message, 'x', {
      duration: 5000,
    });
  }
}
