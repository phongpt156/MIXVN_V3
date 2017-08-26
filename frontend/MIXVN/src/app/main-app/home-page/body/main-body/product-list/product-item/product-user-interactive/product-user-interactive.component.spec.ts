import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductUserInteractiveComponent } from './product-user-interactive.component';

describe('ProductUserInteractiveComponent', () => {
  let component: ProductUserInteractiveComponent;
  let fixture: ComponentFixture<ProductUserInteractiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductUserInteractiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductUserInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
