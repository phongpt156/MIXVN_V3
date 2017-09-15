import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { CollectionService } from 'app/shared/services/collection/collection.service';

@Component({
  selector: 'mix-edit-collection',
  templateUrl: './edit-collection.component.html',
  styleUrls: ['./edit-collection.component.scss']
})
export class EditCollectionComponent implements OnInit {
  collection: any = {};
  collectionImage: string;
  editCollectionForm: FormGroup;
  imgFile: File;
  formData: FormData = new FormData;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
    this.editCollectionForm = this.fb.group({
      name: ['', Validators.required],
      active: [true]
    });
    
    this.patchValue();
  }

  patchValue() {
    setTimeout(() => {
      this.editCollectionForm.patchValue({
        name: this.collection.name,
        active: this.collection.active ? true : false
      });

      this.collectionImage = this.collection.img;
    });
  }

  ngOnDestroy() {
    this.collectionService.getAll()
    .subscribe(res => {
      this.collectionService.collections = res.data;
    });
  }

  imageUploaded(e) {
    this.imgFile = e.file;
  }

  imageRemoved(e) {
    this.imgFile = undefined;
  }

  onSubmit() {
    if (this.editCollectionForm.valid) {
      if (this.imgFile) {
        this.formData.append('img', this.imgFile, this.imgFile.name);
      }

      for (let i in this.editCollectionForm.value) {
        this.formData.append(i, this.editCollectionForm.value[i]);
      }

      this.collectionService.edit(this.formData, this.collection.id)
      .subscribe(res => {
        this.bsModalRef.hide();
        console.log(res);
      });
    }
  }

}
