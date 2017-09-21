import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';

@Component({
  selector: 'mix-edit-feature',
  templateUrl: './edit-feature.component.html',
  styleUrls: ['./edit-feature.component.scss']
})
export class EditFeatureComponent implements OnInit, OnDestroy {
  feature: any = {};
  editFeatureForm: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private featureService: FeatureService
  ) { }

  ngOnInit() {
    this.editFeatureForm = this.fb.group({
      name: ['', Validators.required],
      order: ['', Validators.required],
      active: [true]
    });

    this.patchValue();
  }

  ngOnDestroy() {
    this.featureService.getAll()
    .subscribe(res => {
      this.featureService.features = res.data;
    });
  }

  patchValue() {
    setTimeout(() => {
      this.editFeatureForm.patchValue({
        name: this.feature.name,
        order: this.feature.order,
        active: this.feature.active
      })
    });
  }

  onSubmit() {
    if (this.editFeatureForm.valid) {
      let body: any = {}
      body = this.editFeatureForm.value;

      this.featureService.edit(body, this.feature.id)
      .subscribe(res => {
        this.bsModalRef.hide();
      })
    }
  }

}
