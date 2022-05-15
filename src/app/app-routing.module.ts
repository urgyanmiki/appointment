import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./components/site/main-page/main-page.component";
import {LoginComponent} from "./components/site/login/login.component";
import {RegisterComponent} from "./components/site/register/register.component";
import {AppointmentsComponent} from "./components/admin/appointments/appointments.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {ServicesComponent} from "./components/admin/services/services.component";
import {NewServiceComponent} from "./components/admin/new-service/new-service.component";
import {BookingsComponent} from "./components/admin/bookings/bookings.component";
import {FreeDaysComponent} from "./components/admin/free-days/free-days.component";


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin/appointments',
    component: AppointmentsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/services',
    component: ServicesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/bookings',
    component: BookingsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/free-days',
    component: FreeDaysComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin/new-service',
    component: NewServiceComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
