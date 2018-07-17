import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeatureValueComponent } from './add-feature-value.component';

describe('AddFeatureValueComponent', () => {
  let component: AddFeatureValueComponent;
  let fixture: ComponentFixture<AddFeatureValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFeatureValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeatureValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
