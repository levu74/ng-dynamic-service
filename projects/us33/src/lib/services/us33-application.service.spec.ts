import { TestBed, inject } from '@angular/core/testing';

import { Us33ApplicationService } from './us33-application.service';

describe('Us33ApplicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Us33ApplicationService]
    });
  });

  it('should be created', inject([Us33ApplicationService], (service: Us33ApplicationService) => {
    expect(service).toBeTruthy();
  }));
});
