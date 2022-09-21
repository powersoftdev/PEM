import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//My Components & Services
import { LoginComponent } from './Auth/login/login.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { RegisterComponent } from './Auth/register/register.component';
import { DesignationComponent } from './Common/designation/designation.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import { DxButtonModule } from 'devextreme-angular';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
// import { ReportsComponent } from './Common/reports/reports.component';

import { DxHtmlEditorModule, DxCheckBoxModule } from 'devextreme-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SearchFilterPipe } from './Filters/search-filter.pipe';
//Search Filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//For Paggination
import { NgxPaginationModule } from 'ngx-pagination';
import { LeaveComponent } from './Common/leave/leave.component';
import { TitleComponent } from './Common/title/title.component';
import { LanguageComponent } from './Common/language/language.component';
import { DepartmentsComponent } from './Common/departments/departments.component';
import { standardreliefComponent } from './Common/standardrelief/standardrelief.component';
import { MaritalStatusComponent } from './Common/marital-status/marital-status.component';
import { LoanComponent } from './Common/loan/loan.component';
import { StateComponent } from './Common/state/state.component';
import { activityComponent } from './Common/activity/activity.component';
import { relationshipComponent } from './Common/relationship/relationship.component';
import { offenceComponent } from './Common/offence/offence.component';
import { HrReasonComponent } from './Common/hr-reason/hr-reason.component';
import { CostCenterComponent } from './Common/costcenter/costcenter.component';



//For attendance task 
import { AbsenteeDetailsComponent } from './Common/Reports/Absentee-Reports/Absentee-Details-Reports/absentee-details/absentee-details.component';
import { AbsenteeSummaryComponent } from './Common/Reports/Absentee-Reports/Absentee-Summary-Reports/absentee-summary/absentee-summary.component';
import { DailyAttendanceComponent } from './Common/Reports/Attendance-Reports/Daily-Attendance-Reports/daily-attendance/daily-attendance.component';
import { MonthlySummaryReportComponent } from './Common/Reports/Attendance-Reports/MonthlyAttendance-Reports/monthly-summary-report/monthly-summary-report.component';
import { DeductionReportComponent } from './Common/Reports/Deduction-Reports/deduction-report/deduction-report.component';
import { LatenessReportsComponent } from './Common/Reports/Latteness-reports/Latteness-Detail-Report/lateness-reports/lateness-reports.component';
import { LatenessSummaryReportComponent } from './Common/Reports/Latteness-reports/Latteness-Summary-Report/lateness-summary-report/lateness-summary-report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
        RegisterComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    DesignationComponent,
    SidebarComponent,
       SearchFilterPipe,
    LeaveComponent,
    TitleComponent,
    LanguageComponent,
    DepartmentsComponent,
    standardreliefComponent,
    MaritalStatusComponent,
    LoanComponent,
    StateComponent,
    activityComponent,
    relationshipComponent,
    offenceComponent,
    HrReasonComponent,
    CostCenterComponent,
    
  AbsenteeDetailsComponent,
  AbsenteeSummaryComponent,
  DailyAttendanceComponent,
  MonthlySummaryReportComponent,
  DeductionReportComponent,
  LatenessReportsComponent,
  LatenessSummaryReportComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    DxButtonModule,
    DxDataGridModule,
    DxTemplateModule,
    DxHtmlEditorModule,
    DxCheckBoxModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [
    // {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
