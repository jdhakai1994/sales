import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLibComponent } from './sales-lib.component';

describe('SalesLibComponent', () => {
  let component: SalesLibComponent;
  let fixture: ComponentFixture<SalesLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
