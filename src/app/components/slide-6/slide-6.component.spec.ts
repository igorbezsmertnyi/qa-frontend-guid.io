import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide6Component } from './slide-6.component';

describe('Slide6Component', () => {
  let component: Slide6Component;
  let fixture: ComponentFixture<Slide6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slide6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slide6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
