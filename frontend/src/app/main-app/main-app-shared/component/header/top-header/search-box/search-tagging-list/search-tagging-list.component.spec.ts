import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTaggingListComponent } from './search-tagging-list.component';

describe('SearchTaggingListComponent', () => {
  let component: SearchTaggingListComponent;
  let fixture: ComponentFixture<SearchTaggingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTaggingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTaggingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
