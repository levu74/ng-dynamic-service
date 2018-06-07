import { TestBed, inject } from '@angular/core/testing';

import { Us33Service } from './us33.service';

describe('Us33Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Us33Service]
    });
  });

  it('should be created', inject([Us33Service], (service: Us33Service) => {
    expect(service).toBeTruthy();
  }));
});
