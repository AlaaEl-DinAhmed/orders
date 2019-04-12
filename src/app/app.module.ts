import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { FooterComponent } from './app/footer/footer.component';
import { HomeComponent } from './app/core/home/home.component';
import { LoginComponent } from './app/core/login/login.component';
import { RegisterComponent } from './app/core/register/register.component';
import { NotFoundComponent } from './app/core/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { LoaderService } from './services/loader.service';
import { ProfileComponent } from './app/core/user-account/profile/profile.component';
import { IsLoggedIn } from './app/core/isLoggedIn';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    LoaderService,
    IsLoggedIn,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
