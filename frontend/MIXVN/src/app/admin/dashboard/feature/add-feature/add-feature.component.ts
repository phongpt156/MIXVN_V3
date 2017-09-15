import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { FeatureService } from 'app/shared/services/feature/feature.service';

@Component({
  selector: 'mix-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.scss']
})
export class AddFeatureComponent implements OnInit, OnDestroy {
  addFeatureForm: FormGroup;

  constructor(
    public bsModalRef: BsModalRef,
    private featureService: FeatureService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addFeatureForm = this.fb.group({
      name: ['', Validators.required],
      order: ['', Validators.required],
      active: [true, Validators.required]
    });
  }

  ngOnDestroy() {
    this.featureService.getAll()
    .subscribe(res => {
      this.featureService.features = res.data;
    });
  }

  onSubmit() {
    if (this.addFeatureForm.valid) {
      let body: any = {};
      body = this.addFeatureForm.value;

      this.featureService.add(body)
      .subscribe(res => {
        this.bsModalRef.hide();
      });
    }
  }
}
