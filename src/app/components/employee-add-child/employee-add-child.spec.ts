import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddChild } from './employee-add-child';

describe('EmployeeAddChild', () => {
  let component: EmployeeAddChild;
  let fixture: ComponentFixture<EmployeeAddChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAddChild],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeAddChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
