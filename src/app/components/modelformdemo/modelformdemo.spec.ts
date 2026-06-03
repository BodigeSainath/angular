import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modelformdemo } from './modelformdemo';

describe('Modelformdemo', () => {
  let component: Modelformdemo;
  let fixture: ComponentFixture<Modelformdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modelformdemo],
    }).compileComponents();

    fixture = TestBed.createComponent(Modelformdemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
