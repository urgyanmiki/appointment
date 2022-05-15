import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ConfigService} from "./config.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  getAllAppointmentsUrl = `${this.config.api}appointments`;
  saveAppointmentsUrl = `${this.config.api}save-appointments`;
  findAppointmentsUrl = `${this.config.api}find-appointment`;
  newBookingUrl = `${this.config.api}new-booking`;

  constructor(
    private router: Router,
    private config: ConfigService,
    private http: HttpClient) {
  }

  saveAppointments(appointments) {
    return this.http.post(this.saveAppointmentsUrl, appointments).pipe(map((resp: any) => {
      return resp;
    }));
  }

  getAppointments() {
    return this.http.get(this.getAllAppointmentsUrl).pipe(map((resp: any) => {
      return resp;
    }));
  }

  findAppointment(body) {
    console.log(body)
    return this.http.post(this.findAppointmentsUrl, body).pipe(map((resp: any) => {
      return resp;
    }));
  }

  newBooking(body) {
    return this.http.post(this.newBookingUrl, body).pipe(map((resp: any) => {
      return resp;
    }));
  }

}
