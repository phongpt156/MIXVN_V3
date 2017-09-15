import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { FeatureService } from 'app/shared/services/feature/feature.service';
import { FeatureValueService } from 'app/shared/services/feature-value/feature-value.service';

@Component({
  selector: 'mix-add-feature-value',
  templateUrl: './add-feature-value.component.html',
  styleUrls: ['./add-feature-value.component.scss']
})
export class AddFeatureValueComponent implements OnInit, OnDestroy {
  addFeatureValueForm: FormGroup;
  feature: any = {};

  constructor(
    public bsModalRef: BsModalRef,
    private fb: FormBuilder,
    private featureService: FeatureService,
    private featureValueService: FeatureValueService
  ) { }

  ngOnInit() {
    this.getFeatures();

    this.addFeatureValueForm = this.fb.group({
      vi_name: ['', Validators.required],
      dev_name: [''],
      order: ['', Validators.required],
      feature: ['', Validators.required],
      active: [true, Validators.required]
    });

    this.patchValue();
  }

  ngOnDestroy() {
    this.getFeatures();
  }

  getFeatures() {
    this.featureService.getAll()
    .subscribe(res => {
      this.featureService.features = res.data;
    });
  }

  patchValue() {
    setTimeout(() => {
      this.addFeatureValueForm.patchValue({
        feature: this.feature.id
      });
    });
  }

  onSubmit() {
    if (this.addFeatureValueForm.valid) {
      let body: any = {};
      body = this.addFeatureValueForm.value;
      this.featureValueService.add(body)
      .subscribe(res => {
        this.bsModalRef.hide();
      });
    }
  }
}
