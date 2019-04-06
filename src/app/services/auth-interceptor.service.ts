import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { catchError, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { LoaderService } from './loader.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private loaderService: LoaderService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const clonedReq = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${AuthService.getToken()}`)
        });
        this.loaderService.showLoader();
        return next.handle(clonedReq).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.error.message === 'invalid token') {
                    this.authService.logOut();
                }
                return throwError(error);
            }),
            finalize(
                () => this.loaderService.hideLoader()
            )
        );
    }
}
