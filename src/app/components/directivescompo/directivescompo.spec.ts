import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directivescompo } from './directivescompo';

describe('Directivescompo', () => {
  let component: Directivescompo;
  let fixture: ComponentFixture<Directivescompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Directivescompo],
    }).compileComponents();

    fixture = TestBed.createComponent(Directivescompo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
