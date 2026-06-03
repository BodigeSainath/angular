import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompocomassignParent } from './compocomassign-parent';

describe('CompocomassignParent', () => {
  let component: CompocomassignParent;
  let fixture: ComponentFixture<CompocomassignParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompocomassignParent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompocomassignParent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
