import {Component, OnInit} from '@angular/core';
import {BookingService} from "../../../services/booking.service";
import {FreeDayModel} from "../../../models/free-day-model";

@Component({
  selector: 'app-free-days',
  templateUrl: './free-days.component.html',
  styleUrls: ['./free-days.component.scss']
})
export class FreeDaysComponent implements OnInit {
  isLoading: boolean;
  freeDays;
  freeDay = new FreeDayModel();

  constructor(
    private bookingService: BookingService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.bookingService.getAllFreeDays().subscribe((resp: any) => {
      this.freeDays = resp;
      this.isLoading = false;
    });
  }

  deleteFreeDay(id) {
    this.bookingService.deleteFreeDay(id).subscribe((resp: any) => {
      this.bookingService.getAllFreeDays().subscribe((resp: any) => {
        this.freeDays = resp;
      });
    });
  }

  onSubmitForm() {
    this.bookingService.saveFreeDay(this.freeDay).subscribe((resp: any) => {
      this.bookingService.getAllFreeDays().subscribe((resp: any) => {
        this.freeDays = resp;
      });
    });
  }

}
