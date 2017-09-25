import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvolveCollectionComponent } from './involve-collection.component';

describe('InvolveCollectionComponent', () => {
  let component: InvolveCollectionComponent;
  let fixture: ComponentFixture<InvolveCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvolveCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvolveCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
