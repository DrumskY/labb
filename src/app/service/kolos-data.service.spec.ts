import { TestBed } from '@angular/core/testing';

import { KolosDataService } from './kolos-data.service';

describe('KolosDataService', () => {
  let service: KolosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KolosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
