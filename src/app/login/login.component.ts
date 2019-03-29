import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterContentInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../classes/user.model';

@Component({
  selector: 'app-loginss',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username$: any;
  errorMessage: string;
  requestClass: boolean;
  reqLoading: boolean;
  @ViewChild('loginbtn') LoginBtn: ElementRef;
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
    const credentials: User = this.loginForm.value;
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
