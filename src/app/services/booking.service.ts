import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ConfigService} from "./config.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  getAllBookingsUrl = `${this.config.api}bookings`;
  resolveBookingUrl = `${this.config.api}resolve-booking`;
  saveFreeDayUrl = `${this.config.api}save-free-day`;
  deleteFreeDayUrl = `${this.config.api}delete-free-day`;
  getAllFreeDaysUrl = `${this.config.api}free-days`;

  constructor(
    private router: Router,
    private config: ConfigService,
    private http: HttpClient) {
  }

  getAllBookings() {
    return this.http.get(this.getAllBookingsUrl).pipe(map((resp: any) => {
      return resp;
    }));
  }

  resolveBooking(bookingId) {
    const body = {
      id: bookingId
    }
    console.log(body)
    return this.http.post(this.resolveBookingUrl, body).pipe(map((resp: any) => {
      return resp;
    }));
  }

  getAllFreeDays() {
    return this.http.get(this.getAllFreeDaysUrl).pipe(map((resp: any) => {
      return resp;
    }));
  }

  saveFreeDay(freeDay) {
    console.log(freeDay);
    return this.http.post(this.saveFreeDayUrl, freeDay).pipe(map((resp: any) => {
      return resp;
    }));
  }

  deleteFreeDay(freeDayId) {
    const body = {
      id: freeDayId
    }
    console.log(body)
    return this.http.post(this.deleteFreeDayUrl, body).pipe(map((resp: any) => {
      return resp;
    }));
  }
}
