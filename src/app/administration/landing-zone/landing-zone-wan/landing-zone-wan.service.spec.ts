import { TestBed } from '@angular/core/testing';

import { LandingZoneWanService } from './landing-zone-wan.service';

describe('LandingZoneWanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandingZoneWanService = TestBed.get(LandingZoneWanService);
    expect(service).toBeTruthy();
  });
});
