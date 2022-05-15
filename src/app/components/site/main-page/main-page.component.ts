import {Component, OnInit} from '@angular/core';
import {ServicesService} from "../../../services/services.service";
import {AppointmentService} from "../../../services/appointment.service";
import {BookModel} from "../../../models/book-model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  services;
  isLoading: boolean;
  selectedService;
  selectedDay;
  hasAppointments: boolean;
  appointments;
  selectedAppointment;
  booking = new BookModel();
  isBooked;
  constructor(
    private servicesService: ServicesService,
    private appointmentService: AppointmentService
  ) {
  }

  ngOnInit(): void {
    this.isBooked = false;
    this.isLoading = true;
    this.servicesService.getServices().subscribe((resp: any) => {
      this.services = resp;
      this.isLoading = false;
    });
  }

  onSelectService(service) {
    this.selectedService = service
  }

  onSelectDay() {
    const body = {
      day_of_week: new Date(this.selectedDay).getDay(),
      length: this.selectedService.length
    }
    this.appointmentService.findAppointment(body).subscribe((resp: any) => {
      this.hasAppointments = true;
      this.appointments = resp;
      console.log(resp);
    })
  }

  onSelectAppointment(appointment) {
    this.selectedAppointment = appointment;
    this.booking.day = this.selectedDay;
    this.booking.length = this.selectedService.length;
    this.booking.service_name = this.selectedService.name;
    this.booking.time = this.selectedAppointment.start_date;
  }

  onSubmitForm(){
    console.log(this.booking);
    this.appointmentService.newBooking(this.booking).subscribe((resp: any) => {
      this.isBooked = true;
    });
  }
}
