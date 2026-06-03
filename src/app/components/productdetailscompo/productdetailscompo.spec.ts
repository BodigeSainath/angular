import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productdetailscompo } from './productdetailscompo';

describe('Productdetailscompo', () => {
  let component: Productdetailscompo;
  let fixture: ComponentFixture<Productdetailscompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productdetailscompo],
    }).compileComponents();

    fixture = TestBed.createComponent(Productdetailscompo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
