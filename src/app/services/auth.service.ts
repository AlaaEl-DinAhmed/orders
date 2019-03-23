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
  user$ = new BehaviorSubject<string>(null);
  constructor(private http: HttpClient) { }

  login(credentials: User): Observable<Token> {
    return this.http.post<Token>(`${environment.apiUrl}users/login`, credentials).pipe(
      tap(token => {
        localStorage.setItem('token', token.token);
        localStorage.setItem('username', credentials.username);
        this.user$.next(credentials.username);
      })
    );
  }
}
