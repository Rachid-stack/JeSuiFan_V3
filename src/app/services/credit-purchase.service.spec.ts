import { TestBed } from '@angular/core/testing';

import { CreditPurchaseService } from './credit-purchase.service';

describe('CreditPurchaseService', () => {
  let service: CreditPurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditPurchaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
