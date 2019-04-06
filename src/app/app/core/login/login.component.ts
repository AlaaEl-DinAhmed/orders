import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserLogin } from 'src/app/classes/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

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
  loader$: boolean;
  constructor(
    private fb: FormBuilder,
    private userService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private loader: LoaderService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['alaa', [Validators.required]],
      password: ['alaa', [Validators.required]],
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '';
  }
  login() {
    const credentials: UserLogin = this.loginForm.value;
    // this.isSuccess = true;
    this.loader$ = this.loader.showLoader();
    console.log(this.loader$);
    this.userService.logIn(credentials).subscribe(
      response => {
        if (response) {
          // this.isSuccess = false;
          this.errorMessage = '';
          this.loader$ = this.loader.hideLoader();
          console.log(this.loader$);
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
