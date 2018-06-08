import { TestBed, inject } from '@angular/core/testing';

import { Us201AutoRenameService } from './us201-auto-rename.service';

describe('Us201AutoRenameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Us201AutoRenameService]
    });
  });

  it('should be created', inject([Us201AutoRenameService], (service: Us201AutoRenameService) => {
    expect(service).toBeTruthy();
  }));
});
