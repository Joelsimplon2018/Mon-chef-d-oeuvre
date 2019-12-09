import { TestBed } from '@angular/core/testing';

import { ProfilePhotographeService } from './profile-photographe.service';

describe('ProfilePhotographeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfilePhotographeService = TestBed.get(ProfilePhotographeService);
    expect(service).toBeTruthy();
  });
});
