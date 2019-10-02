import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { G20Component } from './g20.component';

describe('G20Component', () => {
  let component: G20Component;
  let fixture: ComponentFixture<G20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(G20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
