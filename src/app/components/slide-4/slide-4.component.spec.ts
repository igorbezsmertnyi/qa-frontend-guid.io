import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide4Component } from './slide-4.component';

describe('Slide4Component', () => {
  let component: Slide4Component;
  let fixture: ComponentFixture<Slide4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
