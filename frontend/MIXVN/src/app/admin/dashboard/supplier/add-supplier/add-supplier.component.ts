import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SupplierService } from 'app/shared/services/supplier/supplier.service';

@Component({
  selector: 'mix-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit, OnDestroy {
  addSupplierForm: FormGroup;
  backgroundImageFile: File;
  avatarFile: File;
  private formData: FormData = new FormData;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private supplierService: SupplierService
  ) { }

  ngOnInit() {
    this.addSupplierForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      facebook_link: [''],
      facebook_title: [''],
      instagram_link: [''],
      instagram_title: [''],
      active: [true]
    });
  }
  
  ngOnDestroy() {
    this.supplierService.getAll()
    .subscribe(res => {
      this.supplierService.suppliers = res.data;
    });
  }

  imageUploaded(e, name: string) {
    if (name === 'background_image') {
      this.backgroundImageFile = e.file;
    } else if (name === 'avatar') {
      this.avatarFile = e.file;
    }
  }
  
  imageRemoved(e, name: string) {
    if (name === 'background_image') {
      this.backgroundImageFile = undefined;
    } else if (name === 'avatar') {
      this.avatarFile = undefined;
    }
  }

  onSubmit() {
    if (this.addSupplierForm.valid) {
      if (this.backgroundImageFile) {
        this.formData.append('background_image', this.backgroundImageFile, this.backgroundImageFile.name);
      }

      if (this.avatarFile) {
        this.formData.append('avatar', this.avatarFile, this.avatarFile.name);
      }

      for (let i in this.addSupplierForm.value) {
        this.formData.append(i, this.addSupplierForm.value[i]);
      }

      this.supplierService.add(this.formData)
      .subscribe(res => {
        this.bsModalRef.hide();
        this.supplierService.suppliers = res.data;
      });
    }
  }
}
