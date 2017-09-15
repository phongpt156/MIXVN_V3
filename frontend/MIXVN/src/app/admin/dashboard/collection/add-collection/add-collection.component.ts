import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { CollectionService } from 'app/shared/services/collection/collection.service';

@Component({
  selector: 'mix-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.scss']
})
export class AddCollectionComponent implements OnInit, OnDestroy {
  addCollectionForm: FormGroup;
  imgFile: File;
  formData: FormData = new FormData;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private collectionService: CollectionService 
  ) { }

  ngOnInit() {
    this.addCollectionForm = this.fb.group({
      name: ['', Validators.required],
      active: true
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
    if (this.addCollectionForm.valid && this.imgFile) {
      this.formData.append('img', this.imgFile, this.imgFile.name);
      
      for (let i in this.addCollectionForm.value) {
        this.formData.append(i, this.addCollectionForm.value[i]);
      }
  
      this.collectionService.add(this.formData)
      .subscribe(res => {
        console.log(res);
        this.bsModalRef.hide();
      });
    }
  }
}
