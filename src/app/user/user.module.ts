import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ForegtPasswordComponent } from './foregt-password/foregt-password.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [RegisterComponent, ForegtPasswordComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
