import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemUserInteractiveComponent } from './item-user-interactive.component';

describe('ItemUserInteractiveComponent', () => {
  let component: ItemUserInteractiveComponent;
  let fixture: ComponentFixture<ItemUserInteractiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemUserInteractiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemUserInteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
