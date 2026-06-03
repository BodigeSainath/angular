import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpJavaCompo } from './emp-java-compo';

describe('EmpJavaCompo', () => {
  let component: EmpJavaCompo;
  let fixture: ComponentFixture<EmpJavaCompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpJavaCompo],
    }).compileComponents();

    fixture = TestBed.createComponent(EmpJavaCompo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
