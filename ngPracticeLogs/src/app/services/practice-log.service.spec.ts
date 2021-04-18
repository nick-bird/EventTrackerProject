import { TestBed } from '@angular/core/testing';

import { PracticeLogService } from './practice-log.service';

describe('PracticeLogService', () => {
  let service: PracticeLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticeLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
