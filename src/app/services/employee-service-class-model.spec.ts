import { TestBed } from '@angular/core/testing';

import { EmployeeServiceClassModel } from './employee-service-class-model';

describe('EmployeeServiceClassModel', () => {
  let service: EmployeeServiceClassModel;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeServiceClassModel);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
