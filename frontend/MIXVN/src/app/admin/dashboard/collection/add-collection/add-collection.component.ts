import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { CollectionService } from 'app/shared/services/collection/collection.service';

declare var Cropper: any;

@Component({
  selector: 'mix-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.scss']
})
export class AddCollectionComponent implements OnInit, OnDestroy {
  @ViewChild('collectionImagePreview') collectionImagePreview;
  addCollectionForm: FormGroup;
  formData: FormData = new FormData;
  cropper: any;
  isSelectImage: boolean = false;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private collectionService: CollectionService,
  ) { }

  ngOnInit() {
    this.addCollectionForm = this.fb.group({
      name: ['', Validators.required],
      active: true
    });

    this.cropper = new Cropper(this.collectionImagePreview.nativeElement, {
      aspectRatio: 21 / 9,
      viewMode: 1
    });
  }

  ngOnDestroy() {
    this.collectionService.getAll()
    .subscribe(res => {
      this.collectionService.collections = res.data;
    });
  }

  onSubmit() {
    if (this.addCollectionForm.valid && this.isSelectImage) {
      this.cropper.getCroppedCanvas().toBlob((collectionImage) => {
        this.formData.append('img', collectionImage);

        for (let i in this.addCollectionForm.value) {
          this.formData.append(i, this.addCollectionForm.value[i]);
        }
    
        this.collectionService.add(this.formData)
        .subscribe(res => {
          console.log(res);
          this.bsModalRef.hide();
        });
      });
    }
  }

  imageUploaded(e) {
    this.isSelectImage = true;    
    let oFReader = new FileReader();
    
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
