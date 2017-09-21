import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightMainBodyComponent } from './right-main-body.component';

describe('RightMainBodyComponent', () => {
  let component: RightMainBodyComponent;
  let fixture: ComponentFixture<RightMainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightMainBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
