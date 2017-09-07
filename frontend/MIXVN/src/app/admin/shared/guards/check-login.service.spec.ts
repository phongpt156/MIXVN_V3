import { TestBed, inject } from '@angular/core/testing';

import { CheckLogin } from './check-login.service';

describe('CheckLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckLogin]
    });
  });

  it('should be created', inject([CheckLogin], (service: CheckLogin) => {
    expect(service).toBeTruthy();
  }));
});
