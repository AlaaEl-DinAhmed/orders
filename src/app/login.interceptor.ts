import { Injectable } from '@angular/core';
import {
     HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req);
    }
}
