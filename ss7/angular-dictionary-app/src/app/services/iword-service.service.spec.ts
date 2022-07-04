import { TestBed } from '@angular/core/testing';

import { IwordServiceService } from './iword-service.service';

describe('IwordServiceService', () => {
  let service: IwordServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IwordServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
