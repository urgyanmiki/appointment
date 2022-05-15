import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {UserModel} from "../../../models/user-model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = new UserModel();

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitForm() {
    this.authService.register(this.user).subscribe(resp => {
      this.router.navigateByUrl('login');
    });
  }

}
