import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SupplierService } from 'app/shared/services/supplier/supplier.service';

@Component({
  selector: 'mix-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {
  addSupplierForm: FormGroup;
  file: File;
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
      background_image: [''],
      avatar: [''],
      active: true
    });
  }

  hiddenAddSupplierModal() {
    this.bsModalRef.hide();
    var a = new FormData
  }

  onChange(e) {
    this.file = e.target.files[0];
    console.log(this.file);
  }

  imageUploaded(e) {
    console.log(e);
  }

  onSubmit() {
    this.formData.append('background_image', this.file, this.file.name);

    for (let i in this.addSupplierForm.value) {
      this.formData.append(i, this.addSupplierForm.value[i]);
    }
    this.supplierService.add(this.formData)
    .subscribe(res => {
      console.log(res);
    });
  }
}
