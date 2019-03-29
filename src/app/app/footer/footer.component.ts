import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut();
  }

}
