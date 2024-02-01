import { TestBed } from '@angular/core/testing';

import { UpLoadService } from './up-load.service';

describe('UpLoadService', () => {
  let service: UpLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
