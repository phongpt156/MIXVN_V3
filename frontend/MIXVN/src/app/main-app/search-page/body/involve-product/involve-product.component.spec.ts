import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolveProductComponent } from './involve-product.component';

describe('InvolveProductComponent', () => {
  let component: InvolveProductComponent;
  let fixture: ComponentFixture<InvolveProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolveProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolveProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
