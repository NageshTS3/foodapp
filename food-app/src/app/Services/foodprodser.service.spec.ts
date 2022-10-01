import { TestBed } from '@angular/core/testing';

import { FoodprodserService } from './foodprodser.service';

describe('FoodprodserService', () => {
  let service: FoodprodserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodprodserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
