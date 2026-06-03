import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompocomassignChildadd } from './compocomassign-childadd';

describe('CompocomassignChildadd', () => {
  let component: CompocomassignChildadd;
  let fixture: ComponentFixture<CompocomassignChildadd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompocomassignChildadd],
    }).compileComponents();

    fixture = TestBed.createComponent(CompocomassignChildadd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
