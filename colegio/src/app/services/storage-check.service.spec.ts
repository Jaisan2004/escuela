import { TestBed } from '@angular/core/testing';

import { StorageCheckService } from './storage-check.service';

describe('StorageCheckService', () => {
  let service: StorageCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
