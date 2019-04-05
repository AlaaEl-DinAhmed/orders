import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserLogin } from 'src/app/classes/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  isSuccess: boolean;
  returnUrl: string;
  constructor(
    private fb: FormBuilder,
    private userService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['robert', [Validators.required]],
      password: ['asdasdasd', [Validators.required]],
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '';
  }
  login() {
    const credentials: UserLogin = this.loginForm.value;
    this.isSuccess = true;
    this.userService.logIn(credentials).subscribe(
      response => {
        if (response) {
          this.isSuccess = false;
          this.errorMessage = '';
          if (this.returnUrl === '') {
            this.router.navigate(['/home']);
          } else {
            this.router.navigate([this.returnUrl]);
          }
        }
      },
      err => this.errorMessage = err.error.message
    );
  }
}
