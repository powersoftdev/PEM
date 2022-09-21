import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { AuthGuard } from './Guards/auth.guard';
import { DesignationComponent } from './Common/designation/designation.component';
import { LeaveComponent } from './Common/leave/leave.component';

import { TitleComponent } from './Common/title/title.component';
import { LanguageComponent } from './Common/language/language.component';
import { DepartmentsComponent } from './Common/departments/departments.component';
import { standardreliefComponent } from './Common/standardrelief/standardrelief.component';
import { MaritalStatusComponent } from './Common/marital-status/marital-status.component';
import { LoanComponent } from './Common/loan/loan.component';
import { StateComponent } from './Common/state/state.component';
import { CostCenterComponent } from './Common/costcenter/costcenter.component';
import { activityComponent } from './Common/activity/activity.component';
import { relationshipComponent } from './Common/relationship/relationship.component';
import { HrReasonComponent } from './Common/hr-reason/hr-reason.component';
import { offenceComponent } from './Common/offence/offence.component';
import { DailyAttendanceComponent } from './Common/Reports/Attendance-Reports/Daily-Attendance-Reports/daily-attendance/daily-attendance.component';
import { MonthlySummaryReportComponent } from './Common/Reports/Attendance-Reports/MonthlyAttendance-Reports/monthly-summary-report/monthly-summary-report.component';
import { AbsenteeDetailsComponent } from './Common/Reports/Absentee-Reports/Absentee-Details-Reports/absentee-details/absentee-details.component';
import { AbsenteeSummaryComponent } from './Common/Reports/Absentee-Reports/Absentee-Summary-Reports/absentee-summary/absentee-summary.component';
import { DeductionReportComponent } from './Common/Reports/Deduction-Reports/deduction-report/deduction-report.component';
import { LatenessReportsComponent } from './Common/Reports/Latteness-reports/Latteness-Detail-Report/lateness-reports/lateness-reports.component';
import { LatenessSummaryReportComponent } from './Common/Reports/Latteness-reports/Latteness-Summary-Report/lateness-summary-report/lateness-summary-report.component';


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
    path: 'leave',
    component: LeaveComponent
  },
  {
    path: 'title',
    component: TitleComponent
  },
  {
    path: 'language',
    component: LanguageComponent
  },
  {
    path: 'departments',
   component: DepartmentsComponent
  },
  {
    path: 'standardrelief',
   component: standardreliefComponent
  },
  {
    path: 'marital-status',
    component: MaritalStatusComponent
  },
  {
    path: 'loan',
    component: LoanComponent
  },
  {
    path: 'state',
    component: StateComponent
  },
  {
    path: 'costcenter',
    component: CostCenterComponent
  }
  ,
  {
    path: 'activity',
    component: activityComponent
  }
  ,
  {
    path: 'relationship',
    component: relationshipComponent
  }
  ,
  {
    path: 'HrReason',
    component: HrReasonComponent
  }
  ,
  {
    path: 'offence',
    component: offenceComponent
  },

  {
    path: 'offence',
    component: offenceComponent
  },
  {
    path: 'daily-attendance-reports',
    component: DailyAttendanceComponent
  },
  {
    path: 'monthly-attendance-reports',
    component: MonthlySummaryReportComponent
  },
  {
    path: 'absentee-details-reports',
    component: AbsenteeDetailsComponent
  },
  {
    path: 'absentee-summary-reports',
    component: AbsenteeSummaryComponent
  },
  {
    path: 'deduction-reports',
    component: DeductionReportComponent
  },
  {
    path: 'lateness-details-reports',
    component: LatenessReportsComponent
  },
  {
    path: 'lateness-summary-reports',
    component: LatenessSummaryReportComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
