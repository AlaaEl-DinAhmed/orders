import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../classes/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }

  login(credentials: User): Observable<any> {
    return this.http.post(`${environment.apiUrl}users/login`, credentials).pipe(
      tap(token => {
        localStorage.setItem('token', token.token);
        localStorage.setItem('username', credentials.username);
      })
    );
  }
}
