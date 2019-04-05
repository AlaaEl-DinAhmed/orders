import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const clonedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${AuthService.getToken()}`,
                'Content-Type': 'application/json'
            }
        });
        return next.handle(clonedReq);
    }
}
