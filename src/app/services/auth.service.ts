import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ConfigService} from "./config.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl = `${this.config.api}register`;
  loginUrl = `${this.config.api}login`;

  constructor(
    private router: Router,
    private config: ConfigService,
    private http: HttpClient
  ) {
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  setToken(token: any): any {
    localStorage.setItem('token', token);
  }

  deleteToken(): void {
    localStorage.clear();
  }

  logOut(): void {
    this.deleteToken();
    this.router.navigate(['mainpage']);
  }

  register(user) {
    return this.http.post(this.registerUrl, user).pipe(map((resp: any) => {
      return resp;
    }))
  }

  login(user) {
    return this.http.post(this.loginUrl, user).pipe(map((resp: any) => {
      this.setToken(resp.token);
      return resp;
    }))
  }
}
