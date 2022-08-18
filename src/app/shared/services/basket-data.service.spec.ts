import { TestBed } from '@angular/core/testing';

import { BasketDataService } from './basket-data.service';

describe('BasketDataService', () => {
  let service: BasketDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
