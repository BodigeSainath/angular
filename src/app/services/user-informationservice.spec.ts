import { TestBed } from '@angular/core/testing';

import { UserInformationservice } from './user-informationservice';

describe('UserInformationservice', () => {
  let service: UserInformationservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInformationservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
