import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginss',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  constructor(
    private fb: FormBuilder,
    private userService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  login() {
    const credetnials = this.loginForm.value;
    this.userService.login(credetnials).subscribe(
      response => {
        if (response) {
          this.errorMessage = '';
        }
      },
      err => this.errorMessage = err.error.message
    );
  }
}
