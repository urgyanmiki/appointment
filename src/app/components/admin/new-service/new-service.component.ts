import {Component, OnInit} from '@angular/core';
import {ServiceModel} from "../../../models/service-model";
import {ServicesService} from "../../../services/services.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss']
})
export class NewServiceComponent implements OnInit {
  service = new ServiceModel();

  constructor(
    private servicesService: ServicesService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmitForm() {
    this.servicesService.saveService(this.service).subscribe((resp: any) => {
      this.router.navigateByUrl('admin/services');
    })
  }
}
