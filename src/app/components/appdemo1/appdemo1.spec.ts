import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appdemo1 } from './appdemo1';

describe('Appdemo1', () => {
  let component: Appdemo1;
  let fixture: ComponentFixture<Appdemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appdemo1],
    }).compileComponents();

    fixture = TestBed.createComponent(Appdemo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
