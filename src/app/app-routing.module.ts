import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ForgotPasswordComponent } from './Auth/forgot-password/forgot-password.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { AuthGuard } from './Guards/auth.guard';
import { DesignationComponent } from './Common/designation/designation.component';

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
   component: DashboardComponent,canActivate:[AuthGuard]
  },
  { 
    path: 'designation', 
   component: DesignationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
