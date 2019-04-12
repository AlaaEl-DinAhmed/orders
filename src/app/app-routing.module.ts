import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './app/core/login/login.component';
import { NotFoundComponent } from './app/core/not-found/not-found.component';
import { HomeComponent } from './app/core/home/home.component';
import { RegisterComponent } from './app/core/register/register.component';
import { AuthGuard } from './services/auth-guard.service';
import { IsLoggedIn } from './app/core/isLoggedIn';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    resolve: [IsLoggedIn],
    component: LoginComponent,
  },
  {
    path: 'register',
    resolve: [IsLoggedIn],
    component: RegisterComponent,
  },
  {
    path: 'not-found',
    canActivate: [AuthGuard],
    component: NotFoundComponent
  },
  {
    path: '**',
    canActivate: [AuthGuard],
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
