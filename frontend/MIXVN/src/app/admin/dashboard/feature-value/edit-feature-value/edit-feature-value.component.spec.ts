import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeatureValueComponent } from './edit-feature-value.component';

describe('EditFeatureValueComponent', () => {
  let component: EditFeatureValueComponent;
  let fixture: ComponentFixture<EditFeatureValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFeatureValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFeatureValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
