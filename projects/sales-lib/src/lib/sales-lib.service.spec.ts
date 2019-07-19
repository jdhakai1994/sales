import { TestBed } from '@angular/core/testing';

import { SalesLibService } from './sales-lib.service';

describe('SalesLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesLibService = TestBed.get(SalesLibService);
    expect(service).toBeTruthy();
  });
});
