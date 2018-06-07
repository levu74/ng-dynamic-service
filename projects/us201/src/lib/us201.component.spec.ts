import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Us201Component } from './us201.component';

describe('Us201Component', () => {
  let component: Us201Component;
  let fixture: ComponentFixture<Us201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Us201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Us201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
