import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }
    canActivate(): boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/register']);
        return false;
    }
}
