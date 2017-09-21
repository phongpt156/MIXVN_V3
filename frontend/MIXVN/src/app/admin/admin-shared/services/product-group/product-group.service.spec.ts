import { TestBed, inject } from '@angular/core/testing';

import { ProductGroupService } from './product-group.service';

describe('ProductGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductGroupService]
    });
  });

  it('should be created', inject([ProductGroupService], (service: ProductGroupService) => {
    expect(service).toBeTruthy();
  }));
});
