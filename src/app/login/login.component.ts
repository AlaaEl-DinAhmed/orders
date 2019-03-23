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
  error = false;
  @ViewChild('username') userNameInput: ElementRef;
  constructor(
    private fb: FormBuilder,
    private userService: AuthService
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  login() {
    const credetnials = this.loginForm.value;
    console.log(credetnials.username);
    this.userService.login(credetnials).subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
