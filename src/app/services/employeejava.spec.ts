import { TestBed } from '@angular/core/testing';

import { Employeejava } from './employeejava';

describe('Employeejava', () => {
  let service: Employeejava;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Employeejava);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
