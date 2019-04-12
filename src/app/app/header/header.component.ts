import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName$: Observable<string>;
  isHidden = false;
  constructor(
    private userAuthService: AuthService
  ) {
    this.userName$ = this.userAuthService.userName$;
  }

  ngOnInit() {
  }

  toggleDropDown() {
    this.isHidden = !this.isHidden;
  }

  logOut() {
    this.userAuthService.logOut();
  }
}
