import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testdemo } from './testdemo';

describe('Testdemo', () => {
  let component: Testdemo;
  let fixture: ComponentFixture<Testdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testdemo],
    }).compileComponents();

    fixture = TestBed.createComponent(Testdemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
