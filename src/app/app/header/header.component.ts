import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  userName$: Observable<string>;
  constructor(
    private userAuthService: AuthService
  ) {
    this.userName$ = this.userAuthService.userName$;
  }

  ngOnInit() {
  }

}
