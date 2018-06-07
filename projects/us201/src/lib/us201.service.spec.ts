import { TestBed, inject } from '@angular/core/testing';

import { Us201Service } from './us201.service';

describe('Us201Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Us201Service]
    });
  });

  it('should be created', inject([Us201Service], (service: Us201Service) => {
    expect(service).toBeTruthy();
  }));
});
