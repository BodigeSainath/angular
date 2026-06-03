import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompocomassignChildtable } from './compocomassign-childtable';

describe('CompocomassignChildtable', () => {
  let component: CompocomassignChildtable;
  let fixture: ComponentFixture<CompocomassignChildtable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompocomassignChildtable],
    }).compileComponents();

    fixture = TestBed.createComponent(CompocomassignChildtable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
