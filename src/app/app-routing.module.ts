import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { AuthGuard } from './Guards/auth.guard';
import { DesignationComponent } from './Common/designation/designation.component';
import { ReportsComponent } from './Common/reports/reports.component';

import { PayrollComponent } from './Payment/payrollPayType/payrollPaytype.component';
import { DailyAttendanceComponent } from './Reports/Attendance-Reports/Daily-Attendance-Reports/daily-attendance/daily-attendance.component';
import { MonthlySummaryReportComponent } from './Reports/Attendance-Reports/MonthlyAttendance-Reports/monthly-summary-report/monthly-summary-report.component';
import { LatenessReportsComponent } from './Reports/Latteness-reports/Latteness-Detail-Report/lateness-reports/lateness-reports.component';
import { LatenessSummaryReportComponent } from './Reports/Latteness-reports/Latteness-Summary-Report/lateness-summary-report/lateness-summary-report.component';
import { AbsenteeDetailsComponent } from './Reports/Absentee-Reports/Absentee-Details-Reports/absentee-details/absentee-details.component';
import { AbsenteeSummaryComponent } from './Reports/Absentee-Reports/Absentee-Summary-Reports/absentee-summary/absentee-summary.component';
import { DeductionReportComponent } from './Reports/Deduction-Reports/deduction-report/deduction-report.component';
// import { DetailsComponent } from './Reports/Details-Reports/details/details.component';
// import { SummaryReportsComponent } from './Reports/Summary/summary-reports/summary-reports.component';
// import { DailyAttendanceComponent } from './Reports/Attendance-Reports/DailyAttendance-reports/daily-attendance/daily-attendance.component';

ForgotPasswordComponent
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'register',
   component: RegisterComponent
  },
  {
    path: 'forgetPassword',
   component: ForgotPasswordComponent
  },
  {
    path: 'dashboard',
   component: DashboardComponent,
   canActivate:[AuthGuard]
  },
  {
    path: 'designation',
   component: DesignationComponent
  },
  {
    path: 'reports',
   component: ReportsComponent
  },

  {
    path: 'payroll',
    component: PayrollComponent
  },
  {
    path: 'daily-Attendance-report',
    component: DailyAttendanceComponent
  },
  {
    path: 'monthly-attendance-report',
    component: MonthlySummaryReportComponent
  },
  {
    path: 'lateness-detail-report',
    component: LatenessReportsComponent
  },
  {
    path: 'lateness-summary-report',
    component: LatenessSummaryReportComponent
  },
  {
    path: 'absentee-details-report',
    component: AbsenteeDetailsComponent
  },
  {
    path: 'absentee-summary-report',
    component: AbsenteeSummaryComponent
  },
  {
    path: 'deduction-report',
    component: DeductionReportComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
