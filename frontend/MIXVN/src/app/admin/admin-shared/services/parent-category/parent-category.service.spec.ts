import { TestBed, inject } from '@angular/core/testing';

import { ParentCategoryService } from './parent-category.service';

describe('ParentCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParentCategoryService]
    });
  });

  it('should be created', inject([ParentCategoryService], (service: ParentCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
