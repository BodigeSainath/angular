import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contractjob } from './contractjob';

describe('Contractjob', () => {
  let component: Contractjob;
  let fixture: ComponentFixture<Contractjob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contractjob],
    }).compileComponents();

    fixture = TestBed.createComponent(Contractjob);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
