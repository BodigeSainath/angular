import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeClassModel } from './employee-class-model';

describe('EmployeeClassModel', () => {
  let component: EmployeeClassModel;
  let fixture: ComponentFixture<EmployeeClassModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeClassModel],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeClassModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
