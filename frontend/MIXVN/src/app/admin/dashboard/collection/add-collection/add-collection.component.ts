import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

import { CollectionService } from 'app/admin/admin-shared/services/collection/collection.service';

declare var Cropper: any;

@Component({
  selector: 'mix-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.scss']
})
export class AddCollectionComponent implements OnInit {
  @ViewChild('collectionImagePreview') collectionImagePreview;
  addCollectionForm: FormGroup;
  formData: FormData = new FormData;
  cropper: any;
  isSelectImage = false;

  constructor(
    public dialogRef: MdDialogRef<AddCollectionComponent>,
    private fb: FormBuilder,
    private collectionService: CollectionService,
  ) { }

  ngOnInit() {
    this.addCollectionForm = this.fb.group({
      name: ['', Validators.required],
      active: [true]
    });

    this.cropper = new Cropper(this.collectionImagePreview.nativeElement, {
      aspectRatio: 21 / 9,
      viewMode: 1
    });
  }

  onSubmit() {
    if (this.addCollectionForm.valid && this.isSelectImage) {
      this.cropper.getCroppedCanvas().toBlob(collectionImage => {
        this.formData.append('img', collectionImage);

        for (const i of Object.keys(this.addCollectionForm.value)) {
          this.formData.append(i, this.addCollectionForm.value[i]);
        }

        this.collectionService.add(this.formData)
        .subscribe(res => {
          this.dialogRef.close(true);
        });
      });
    }
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
}
