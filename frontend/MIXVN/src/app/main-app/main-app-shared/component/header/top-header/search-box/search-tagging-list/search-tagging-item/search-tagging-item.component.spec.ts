import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTaggingItemComponent } from './search-tagging-item.component';

describe('SearchTaggingItemComponent', () => {
  let component: SearchTaggingItemComponent;
  let fixture: ComponentFixture<SearchTaggingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTaggingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTaggingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
