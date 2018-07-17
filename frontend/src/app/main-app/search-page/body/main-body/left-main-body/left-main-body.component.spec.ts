import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftMainBodyComponent } from './left-main-body.component';

describe('LeftMainBodyComponent', () => {
  let component: LeftMainBodyComponent;
  let fixture: ComponentFixture<LeftMainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMainBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
