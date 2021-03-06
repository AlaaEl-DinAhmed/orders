import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Token } from '../classes/token.model';
import { UserLogin } from '../classes/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
    ) {
    this.userName$.next(localStorage.getItem('username'));
  }
  userName$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  static isAuthenticated(): string {
    return localStorage.getItem('username');
  }

  static getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(credentials: UserLogin): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}users/login`, credentials).pipe(
      tap(token => {
        localStorage.setItem('token', token.token);
        localStorage.setItem('username', credentials.username);
        this.userName$.next(credentials.username);
        this.router.navigate(['/home']);
      }));
  }

  register(credentials: UserLogin): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}users/register`, credentials).pipe(
      tap(token => {
        localStorage.setItem('token', token.token);
        localStorage.setItem('username', credentials.username);
        this.userName$.next(credentials.username);
        this.router.navigate(['/home']);
      })
    );
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.userName$.next(null);
    this.router.navigate(['/login']);
  }
}
