import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextHoursReportComponent } from './next-hours-report.component';

describe('NextHoursReportComponent', () => {
  let component: NextHoursReportComponent;
  let fixture: ComponentFixture<NextHoursReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextHoursReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextHoursReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
