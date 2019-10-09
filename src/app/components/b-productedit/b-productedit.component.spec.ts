import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BProducteditComponent } from './b-productedit.component';

describe('BProducteditComponent', () => {
  let component: BProducteditComponent;
  let fixture: ComponentFixture<BProducteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BProducteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BProducteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
