import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Permanentjob } from './permanentjob';

describe('Permanentjob', () => {
  let component: Permanentjob;
  let fixture: ComponentFixture<Permanentjob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Permanentjob],
    }).compileComponents();

    fixture = TestBed.createComponent(Permanentjob);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
