import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const clonedReq = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${AuthService.getToken()}`)
        });
        return next.handle(clonedReq).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.error.message === 'invalid token') {
                    this.authService.logOut();
                }
                return throwError(error);
            })
        );
    }
}
