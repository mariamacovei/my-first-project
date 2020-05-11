import { TestBed } from '@angular/core/testing';

import { FunctionlService } from './functionl.service';

describe('FunctionlService', () => {
  let service: FunctionlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
