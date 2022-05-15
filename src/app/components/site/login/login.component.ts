import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../../models/user-model";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new UserModel();

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    this.authService.login(this.user).subscribe(resp => {
      this.router.navigateByUrl('admin/appointments');
    });
  }
}
