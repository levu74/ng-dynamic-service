import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Us33Component } from './us33.component';

describe('Us33Component', () => {
  let component: Us33Component;
  let fixture: ComponentFixture<Us33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Us33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Us33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
