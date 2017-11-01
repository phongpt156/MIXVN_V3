import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailModalComponent } from './item-detail-modal.component';

describe('ItemDetailModalComponent', () => {
  let component: ItemDetailModalComponent;
  let fixture: ComponentFixture<ItemDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
