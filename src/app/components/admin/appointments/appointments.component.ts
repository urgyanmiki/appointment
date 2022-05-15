import {Component, OnInit} from '@angular/core';
import {AppointmentModel} from "../../../models/appointment-model";
import {AppointmentService} from "../../../services/appointment.service";

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
  dayOneObject = new AppointmentModel();
  dayTwoObject = new AppointmentModel();
  dayThreeObject = new AppointmentModel();
  dayFourObject = new AppointmentModel();
  dayFiveObject = new AppointmentModel();

  dayOneObjects;
  dayTwoObjects;
  dayThreeObjects;
  dayFourObjects;
  dayFiveObjects;

  appointments;
  isAppointmentSets: boolean = false;

  constructor(
    private appointmentService: AppointmentService
  ) {
  }

  ngOnInit(): void {
    this.dayOneObjects = [];
    this.dayTwoObjects = [];
    this.dayThreeObjects = [];
    this.dayFourObjects = [];
    this.dayFiveObjects = [];
    this.appointments = []
    this.appointmentService.getAppointments().subscribe((resp: any) => {
      resp.forEach(obj => {
        if (obj.day_of_week == 1) {
          this.dayOneObjects.push(obj);
        } else if (obj.day_of_week == 2) {
          this.dayTwoObjects.push(obj);
        } else if (obj.day_of_week == 3) {
          this.dayThreeObjects.push(obj);
        } else if (obj.day_of_week == 4) {
          this.dayFourObjects.push(obj);
        } else if (obj.day_of_week == 5) {
          this.dayFiveObjects.push(obj);
        }
      });
    });
  }

  deleteFromObject(object, index) {
    object.splice(index, 1)
  }

  onSubmitDayOne() {
    console.log(this.dayOneObjects)
    this.dayOneObjects.push(this.dayOneObject);
    this.dayOneObject = new AppointmentModel();
  }

  onSubmitDayTwo() {
    this.dayTwoObjects.push(this.dayTwoObject);
    this.dayTwoObject = new AppointmentModel();
  }

  onSubmitDayThree() {
    this.dayThreeObjects.push(this.dayThreeObject);
    this.dayThreeObject = new AppointmentModel();
  }

  onSubmitDayFour() {
    this.dayFourObjects.push(this.dayFourObject);
    this.dayFourObject = new AppointmentModel();
  }

  onSubmitDayFive() {
    this.dayFiveObjects.push(this.dayFiveObject);
    this.dayFiveObject = new AppointmentModel();
  }

  onSubmitAppointments() {
    console.log(this.dayOneObjects);
    this.dayOneObjects.forEach(obj => {
      obj.day_of_week = 1;
      this.appointments.push(obj)
    })
    this.dayTwoObjects.forEach(obj => {
      obj.day_of_week = 2;
      this.appointments.push(obj)
    })
    console.log(this.appointments);
    this.dayThreeObjects.forEach(obj => {
      obj.day_of_week = 3;
      this.appointments.push(obj)
    })
    console.log(this.appointments);
    this.dayFourObjects.forEach(obj => {
      obj.day_of_week = 4;
      this.appointments.push(obj)
    })
    console.log(this.appointments);
    this.dayFiveObjects.forEach(obj => {
      obj.day_of_week = 5;
      this.appointments.push(obj)
    })
    console.log(this.appointments);

    this.appointmentService.saveAppointments(this.appointments).subscribe(resp => {
      this.appointments = [];
      console.log(resp);
    });
  }
}
