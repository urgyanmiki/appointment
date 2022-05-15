import { Component, OnInit } from '@angular/core';
import {BookingService} from "../../../services/booking.service";

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {
  isLoading: boolean;
  bookings;
  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.bookingService.getAllBookings().subscribe(resp =>{
      this.bookings = resp;
      this.isLoading = false;
    })
  }

  statusSetter(status){
    if (status === 'booked'){
      return 'Lefoglalt'
    }else if (status === 'resolved'){
      return 'Lemondva'
    }
  }

  resolveBooking(id){
    return this.bookingService.resolveBooking(id).subscribe(resp => {
      this.bookingService.getAllBookings().subscribe(resp =>{
        this.bookings = resp;
      })
    })
  }

}
