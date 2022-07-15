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
import { TokenInterceptorService } from './Services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    RegisterComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    DesignationComponent,
    SidebarComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private injector: Injector){}
  // InjectorInstance = this.injector;
 }
// export let InjectorInstance: Injector;
