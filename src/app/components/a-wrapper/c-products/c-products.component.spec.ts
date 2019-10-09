import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CProductsComponent } from './c-products.component';

describe('CProductsComponent', () => {
  let component: CProductsComponent;
  let fixture: ComponentFixture<CProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
