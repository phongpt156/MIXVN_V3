import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteModalComponent } from './confirm-delete-modal.component';

describe('ConfirmDeleteModalComponent', () => {
  let component: ConfirmDeleteModalComponent;
  let fixture: ComponentFixture<ConfirmDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
