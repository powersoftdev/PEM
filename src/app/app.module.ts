import {  NgModule } from '@angular/core';
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

import { PayrollComponent } from './Payment/payrollPayType/payrollPaytype.component';

import { DxButtonModule } from 'devextreme-angular';
import { DxDataGridModule, DxToolbarModule,DxTemplateModule,DxTreeViewModule ,DxDropDownBoxModule,DxFilterBuilderModule} from 'devextreme-angular';
import { ReportsComponent } from './Common/reports/reports.component';
import { DxHtmlEditorModule, DxCheckBoxModule } from 'devextreme-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SearchFilterPipe } from './Filters/search-filter.pipe';
//Search Filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//For Paggination
import { NgxPaginationModule } from 'ngx-pagination';

//DataTables
import { DataTablesModule } from 'angular-datatables';
import { DesignationService } from './Services/DesignationS/designation.service';
import { LoginService } from './Services/LogInS/login.service';
import { SwalService } from './Services/AleartPopUpService/swal.service';
import { PaymentService } from './Services/PayrollService/payroll.service';



// import { AbsentDetailComponent } from './Reports/Absent-reports/Absent-Details-Report/absent-detail/absent-detail.component';
// import { AbsentSummaryComponent } from './Reports/Absent-reports/Absent-Summary-Report/absent-summary/absent-summary.component';
// import { DailyAttendanceComponent } from './Reports/Attendance-Reports/DailyAttendance-reports/daily-attendance/daily-attendance.component';
import { LatenessReportsComponent } from './Reports/Latteness-reports/Latteness-Detail-Report/lateness-reports/lateness-reports.component';
import { LatenessSummaryReportComponent } from './Reports/Latteness-reports/Latteness-Summary-Report/lateness-summary-report/lateness-summary-report.component';
import { MonthlySummaryReportComponent } from './Reports/Attendance-Reports/MonthlyAttendance-Reports/monthly-summary-report/monthly-summary-report.component';
import { ReportsService } from './Services/Reports-Services/Employee Details Service/Employee-Details-reports.service';
import { DeductionReportComponent } from './Reports/Deduction-Reports/deduction-report/deduction-report.component';
import { DailyAttendanceComponent } from './Reports/Attendance-Reports/Daily-Attendance-Reports/daily-attendance/daily-attendance.component';
import { AbsenteeDetailsComponent } from './Reports/Absentee-Reports/Absentee-Details-Reports/absentee-details/absentee-details.component';
import { AbsenteeSummaryComponent } from './Reports/Absentee-Reports/Absentee-Summary-Reports/absentee-summary/absentee-summary.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    RegisterComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    DesignationComponent,
    SidebarComponent,
    ReportsComponent,
    SearchFilterPipe,
    
    PayrollComponent,


        //  AbsentDetailComponent,
        //  DailyAttendanceComponent,
        //  AbsentSummaryComponent,
        
         LatenessReportsComponent,
         LatenessSummaryReportComponent,
         MonthlySummaryReportComponent,
         DeductionReportComponent,
         DailyAttendanceComponent,
         AbsenteeDetailsComponent,
         AbsenteeSummaryComponent,
        

 

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
    NgxPaginationModule,
    DataTablesModule,
    DxTreeViewModule,
    DxDropDownBoxModule,DxFilterBuilderModule,DxToolbarModule
  ],
  providers: [
    DesignationService,
    LoginService,
    SwalService,
    PaymentService,
    ReportsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
