import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ConfigService} from "./config.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  getAllServiceUrl = `${this.config.api}services`;
  saveServiceUrl = `${this.config.api}save-service`;
  deleteServiceUrl = `${this.config.api}delete-service`;

  _services

  constructor(
    private router: Router,
    private config: ConfigService,
    private http: HttpClient) {
  }

  get services() {
    return this._services;
  }

  set services(val) {
    this._services = val;
  }


  getServices() {
    return this.http.get(this.getAllServiceUrl).pipe(map((resp: any) => {
      return resp;
    }))
  }

  saveService(service) {
    return this.http.post(this.saveServiceUrl, service).pipe(map((resp: any) => {
      return resp;
    }))
  }

  deleteService(serviceId) {
    const body = {
      id: serviceId
    }
    return this.http.post(this.deleteServiceUrl, body).pipe(map((resp: any) => {
      return resp;
    }))
  }
}
