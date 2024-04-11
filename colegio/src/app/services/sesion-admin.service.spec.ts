import { TestBed } from '@angular/core/testing';

import { SesionAdminService } from './sesion-admin.service';

describe('SesionAdminService', () => {
  let service: SesionAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SesionAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
