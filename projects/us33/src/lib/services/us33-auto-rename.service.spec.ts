import { TestBed, inject } from '@angular/core/testing';

import { Us33AutoRenameService } from './us33-auto-rename.service';

describe('Us33AutoRenameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Us33AutoRenameService]
    });
  });

  it('should be created', inject([Us33AutoRenameService], (service: Us33AutoRenameService) => {
    expect(service).toBeTruthy();
  }));
});
