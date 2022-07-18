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
import { ReportsComponent } from './Common/reports/reports.component';
import { DxHtmlEditorModule, DxCheckBoxModule } from 'devextreme-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SearchFilterPipe } from './Filters/search-filter.pipe';
//Search Filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';
//For Paggination
import { NgxPaginationModule } from 'ngx-pagination';
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
    SearchFilterPipe
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
