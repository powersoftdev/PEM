import { TestBed } from '@angular/core/testing';

import { EmployeeSummaryReportsService } from './employee-summary-reports.service';

describe('EmployeeSummaryReportsService', () => {
  let service: EmployeeSummaryReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSummaryReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
