import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  username: Observable<string>;
  constructor(private userService: AuthService) {
    this.username = this.userService.isLoggedIn();
  }
  ngOnInit() {
  }
}
