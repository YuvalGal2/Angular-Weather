import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextHoursReportsComponent } from './next-hours-reports.component';

describe('NextHoursReportComponent', () => {
  let component: NextHoursReportsComponent;
  let fixture: ComponentFixture<NextHoursReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextHoursReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextHoursReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
