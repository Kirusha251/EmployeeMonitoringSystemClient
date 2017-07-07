import { TestBed, inject } from '@angular/core/testing';

import { TimeAtWorkService } from './time-at-work.service';

describe('TimeAtWorkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeAtWorkService]
    });
  });

  it('should be created', inject([TimeAtWorkService], (service: TimeAtWorkService) => {
    expect(service).toBeTruthy();
  }));
});
