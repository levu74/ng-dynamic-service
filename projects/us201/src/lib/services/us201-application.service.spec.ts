import { TestBed, inject } from '@angular/core/testing';

import { Us201ApplicationService } from './us201-application.service';

describe('Us201ApplicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Us201ApplicationService]
    });
  });

  it('should be created', inject([Us201ApplicationService], (service: Us201ApplicationService) => {
    expect(service).toBeTruthy();
  }));
});
