import { TestBed, inject } from '@angular/core/testing';

import { SearchTaggingService } from './search-tagging.service';

describe('SearchTaggingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchTaggingService]
    });
  });

  it('should be created', inject([SearchTaggingService], (service: SearchTaggingService) => {
    expect(service).toBeTruthy();
  }));
});
