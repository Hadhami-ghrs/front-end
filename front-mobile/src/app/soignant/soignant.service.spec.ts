import { TestBed } from '@angular/core/testing';

import { SoignantService } from './soignant.service';

describe('SoignantService', () => {
  let service: SoignantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoignantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
