import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserLogin } from 'src/app/classes/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
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
  users$;
  loginQuery: string;
  constructor(
    private fb: FormBuilder,
    private userService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private apollo: Apollo
  ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['alaa', [Validators.required]],
      password: ['alaa', [Validators.required]],
    });
    this.loginQuery = gql`
    mutation register {
      register(
        username: ${this.loginForm.get('username').value},
        password: ${this.loginForm.get('password').value}
        )
    }`;
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '';
  }

  login() {
    // const credentials: UserLogin = this.loginForm.value;
    // this.isSuccess = true;
    // this.userService.logIn(credentials).subscribe(
    //   response => {
    //     if (response) {
    //       this.isSuccess = false;
    //       this.errorMessage = '';
    //       if (this.returnUrl === '') {
    //         this.router.navigate(['/home']);
    //       } else {
    //         this.router.navigate([this.returnUrl]);
    //       }
    //     }
    //   },
    //   err => this.errorMessage = err.error.message
    // );
    this.users$ = this.apollo.mutate({
      mutation: this.loginQuery
    }).subscribe(data => console.log(data));
  }
}
