import { TestBed, inject } from '@angular/core/testing';

import { FeatureValueService } from './feature-value.service';

describe('FeatureValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureValueService]
    });
  });

  it('should be created', inject([FeatureValueService], (service: FeatureValueService) => {
    expect(service).toBeTruthy();
  }));
});
