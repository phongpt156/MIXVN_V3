import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';


import { FeatureService } from 'app/admin/admin-shared/services/feature/feature.service';

@Component({
  selector: 'mix-add-feature',
  templateUrl: './add-feature.component.html',
  styleUrls: ['./add-feature.component.scss']
})
export class AddFeatureComponent implements OnInit {
  addFeatureForm: FormGroup;

  constructor(
    public dialogRef: MdDialogRef<AddFeatureComponent>,
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

  onSubmit() {
    if (this.addFeatureForm.valid) {
      let body: any = {};
      body = this.addFeatureForm.value;

      this.featureService.add(body)
      .subscribe(res => {
        this.dialogRef.close(true);
      });
    }
  }
}
