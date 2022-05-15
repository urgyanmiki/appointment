import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {CanActivate, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  canActivate(): boolean {
    if (!this.auth.getToken()) {
      this.router.navigate(['mainpage']);
      return false;
    }
    return true;
  }
}
