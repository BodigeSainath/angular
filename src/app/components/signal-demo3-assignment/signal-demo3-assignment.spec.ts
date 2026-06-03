import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDemo3Assignment } from './signal-demo3-assignment';

describe('SignalDemo3Assignment', () => {
  let component: SignalDemo3Assignment;
  let fixture: ComponentFixture<SignalDemo3Assignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDemo3Assignment],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalDemo3Assignment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
