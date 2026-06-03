import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appdemo2 } from './appdemo2';

describe('Appdemo2', () => {
  let component: Appdemo2;
  let fixture: ComponentFixture<Appdemo2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appdemo2],
    }).compileComponents();

    fixture = TestBed.createComponent(Appdemo2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
