import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AWrapperComponent } from './a-wrapper.component';

describe('AWrapperComponent', () => {
  let component: AWrapperComponent;
  let fixture: ComponentFixture<AWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
