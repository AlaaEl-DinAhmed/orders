import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../classes/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Token } from '../classes/token.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userName$ = new BehaviorSubject<any>(null);
  logged: boolean;
  constructor(private http: HttpClient) { }

  login(credentials: User): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}users/login`, credentials).pipe(
      tap(token => {
        localStorage.setItem('token', token.token);
        localStorage.setItem('username', credentials.username);
        return this.userName$;
      }));
  }
  isLoggedIn() {
    if (localStorage.getItem('username')) {
      this.userName$.next(localStorage.getItem('username'));
    }
    return this.userName$;
  }
  isLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
}
