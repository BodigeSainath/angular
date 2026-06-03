import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTableChild } from './employee-table-child';

describe('EmployeeTableChild', () => {
  let component: EmployeeTableChild;
  let fixture: ComponentFixture<EmployeeTableChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeTableChild],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeTableChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
