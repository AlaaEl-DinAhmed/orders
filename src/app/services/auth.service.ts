import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../classes/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject(null);
  constructor(private http: HttpClient) {}

  login(credentials: User) {
    return this.http.post(`${environment.apiUrl}users/login`, credentials);
  }
}
