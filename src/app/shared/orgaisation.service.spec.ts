import { TestBed } from '@angular/core/testing';

import { OrgaisationService } from './orgaisation.service';

describe('OrgaisationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrgaisationService = TestBed.get(OrgaisationService);
    expect(service).toBeTruthy();
  });
});
