import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolveItemComponent } from './involve-item.component';

describe('InvolveItemComponent', () => {
  let component: InvolveItemComponent;
  let fixture: ComponentFixture<InvolveItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolveItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
