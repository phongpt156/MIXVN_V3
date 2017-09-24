import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

import { CollectionService } from 'app/admin/admin-shared/services/collection/collection.service';

declare var Cropper: any;

@Component({
  selector: 'mix-edit-collection',
  templateUrl: './edit-collection.component.html',
  styleUrls: ['./edit-collection.component.scss']
})
export class EditCollectionComponent implements OnInit {
  @ViewChild('collectionImagePreview') collectionImagePreview;
  collection: any = {};
  collectionImage: string;
  editCollectionForm: FormGroup;
  formData: FormData = new FormData;
  cropper: any;
  isSelectImage = false;

  constructor(
    public dialogRef: MdDialogRef<EditCollectionComponent>,
    private fb: FormBuilder,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.editCollectionForm = this.fb.group({
      name: ['', Validators.required],
      active: [true]
    });

    this.patchValue();

    this.cropper = new Cropper(this.collectionImagePreview.nativeElement, {
      aspectRatio: 21 / 9,
      viewMode: 1
    });

  }

  patchValue() {
    this.editCollectionForm.patchValue({
      name: this.collection.name,
      active: this.collection.active ? true : false
    });

    this.collectionImage = this.collection.img;
  }

  imageUploaded(e) {
    this.isSelectImage = true;
    const oFReader = new FileReader();

    oFReader.readAsDataURL(e.file);
    oFReader.onload = (oFREvent) => {
      this.cropper.replace(oFREvent.target['result']);
    }
  }

  imageRemoved() {
    this.isSelectImage = false;
    this.cropper.destroy();
  }

  async onSubmit() {
    if (this.editCollectionForm.valid) {
      if (this.isSelectImage) {
        await this.convertBlob();
      }

      this.sendData();
    }
  }

  sendData() {
    for (const i of Object.keys(this.editCollectionForm.value)) {
      this.formData.append(i, this.editCollectionForm.value[i]);
    }

    this.collectionService.edit(this.formData, this.collection.id)
    .subscribe(res => {
      this.dialogRef.close(true);
    });
  }

  convertBlob() {
    return new Promise(resolve => {
      this.cropper.getCroppedCanvas().toBlob((collectionImage) => {
        this.formData.append('img', collectionImage);
        resolve();
      });
    });
  }
}
