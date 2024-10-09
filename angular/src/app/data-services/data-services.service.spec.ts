import { TestBed } from '@angular/core/testing';

import { DataService } from './data-services.service';

describe('DataServicesService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
