import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class IsLoggedIn {
    constructor(
        private router: Router,
        private authService: AuthService) {
    }
    resolve(): void {
        if (AuthService.isAuthenticated()) {
            this.router.navigate(['/home']);
        }
    }
}
