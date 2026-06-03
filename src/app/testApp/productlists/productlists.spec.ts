import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productlists } from './productlists';

describe('Productlists', () => {
  let component: Productlists;
  let fixture: ComponentFixture<Productlists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productlists],
    }).compileComponents();

    fixture = TestBed.createComponent(Productlists);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
