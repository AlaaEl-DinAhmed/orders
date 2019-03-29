import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string;
  requestClass: boolean;
  reqLoading: boolean;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    const credentials = this.registerForm.value;
    this.requestClass = true;
    this.reqLoading = true;
    this.authService.register(credentials).subscribe(
      response => {
        if (response) {
          this.requestClass = false;
          this.reqLoading = false;
          this.errorMessage = '';
        }
      },
      err => this.errorMessage = err.error.errorMessage
    );
  }
}
