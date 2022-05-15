import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/site/login/login.component';
import { RegisterComponent } from './components/site/register/register.component';
import { MainPageComponent } from './components/site/main-page/main-page.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AppointmentsComponent } from './components/admin/appointments/appointments.component';
import { FreeDaysComponent } from './components/admin/free-days/free-days.component';
import { ServicesComponent } from './components/admin/services/services.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewServiceComponent} from "./components/admin/new-service/new-service.component";
import {BookingsComponent} from "./components/admin/bookings/bookings.component";
import { BookedAppointmentComponent } from './components/site/booked-appointment/booked-appointment.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainPageComponent,
    NavbarComponent,
    FooterComponent,
    AppointmentsComponent,
    FreeDaysComponent,
    NewServiceComponent,
    ServicesComponent,
    BookingsComponent,
    BookedAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
