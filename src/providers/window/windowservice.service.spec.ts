import { TestBed } from '@angular/core/testing';

import { WindowService } from './windowservice.service';

describe('WindowserviceService', () => {
  let service: WindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
