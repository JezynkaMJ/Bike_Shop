import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroBasicComponent } from './intro-basic.component';

describe('IntroBasicComponent', () => {
  let component: IntroBasicComponent;
  let fixture: ComponentFixture<IntroBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
