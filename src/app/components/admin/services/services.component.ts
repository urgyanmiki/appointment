import {Component, OnInit} from '@angular/core';
import {ServiceModel} from "../../../models/service-model";
import {Router} from "@angular/router";
import {ServicesService} from "../../../services/services.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services = []
  isLoading: boolean;

  constructor(
    private router: Router,
    private servicesService: ServicesService
    ) {
  }

  ngOnInit(): void {
    this.isLoading = true
    this.servicesService.getServices().subscribe((resp: any) => {
      this.services = resp;
      this.isLoading = false
    })
  }

  navigate(route: any):  void {
    this.router.navigateByUrl(route);
  }

  deleteService(serviceId) {
    this.servicesService.deleteService(serviceId).subscribe((resp: any) => {
      this.servicesService.getServices().subscribe((resp: any) => {
        this.services = resp;
      })
    })
  }
}
