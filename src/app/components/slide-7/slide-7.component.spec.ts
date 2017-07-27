import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide7Component } from './slide-7.component';

describe('Slide7Component', () => {
  let component: Slide7Component;
  let fixture: ComponentFixture<Slide7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
