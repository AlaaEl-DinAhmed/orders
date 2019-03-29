import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserLogin } from 'src/app/classes/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  requestClass: boolean;
  reqLoading: boolean;
  constructor(
    private fb: FormBuilder,
    private userService: AuthService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['robert', [Validators.required]],
      password: ['asdasdasd', [Validators.required]],
    });
  }
  login() {
    const credentials: UserLogin = this.loginForm.value;
    this.requestClass = true;
    this.reqLoading = true;
    this.userService.login(credentials).subscribe(
      response => {
        if (response) {
          this.requestClass = false;
          this.reqLoading = false;
          this.errorMessage = '';
        }
      },
      err => this.errorMessage = err.error.message
    );
  }
}