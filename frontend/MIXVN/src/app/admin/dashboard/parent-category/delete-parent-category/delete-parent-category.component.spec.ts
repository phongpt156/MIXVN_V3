import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParentCategoryComponent } from './delete-parent-category.component';

describe('DeleteParentCategoryComponent', () => {
  let component: DeleteParentCategoryComponent;
  let fixture: ComponentFixture<DeleteParentCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteParentCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteParentCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
