import { TestBed, inject } from '@angular/core/testing';

import { AccountlistService } from './accountlist.service';

describe('AccountlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountlistService]
    });
  });

  it('should be created', inject([AccountlistService], (service: AccountlistService) => {
    expect(service).toBeTruthy();
  }));
});
