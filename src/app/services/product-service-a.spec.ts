import { TestBed } from '@angular/core/testing';

import { ProductServiceA } from './product-service-a';

describe('ProductServiceA', () => {
  let service: ProductServiceA;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServiceA);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
