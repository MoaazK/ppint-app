import { TestBed } from '@angular/core/testing';

import { InterfaceDatasetService } from './interface-dataset.service';

describe('InterfaceDatasetService', () => {
  let service: InterfaceDatasetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterfaceDatasetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
