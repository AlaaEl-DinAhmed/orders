import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForegtPasswordComponent } from './foregt-password/foregt-password.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [ForegtPasswordComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
