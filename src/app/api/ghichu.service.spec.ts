import { TestBed } from '@angular/core/testing';

import { GhichuService } from './ghichu.service';

describe('GhichuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GhichuService = TestBed.get(GhichuService);
    expect(service).toBeTruthy();
  });
});
