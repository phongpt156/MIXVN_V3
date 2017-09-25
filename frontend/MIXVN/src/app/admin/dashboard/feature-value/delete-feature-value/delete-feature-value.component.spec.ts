import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFeatureValueComponent } from './delete-feature-value.component';

describe('DeleteFeatureValueComponent', () => {
  let component: DeleteFeatureValueComponent;
  let fixture: ComponentFixture<DeleteFeatureValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFeatureValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFeatureValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
