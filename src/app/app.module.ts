import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from '../app/navigation/header/header.component';
import { NavComponent } from '../app/navigation/nav.component';
import { IndexComponent } from '../app/index/index.component';
import { NotfoundComponent } from './notfound/notfound.component';
// Services
import { AuthService } from './services/auth.service';
import { AuthInterceptorService } from './services/authinterceptor.service';
import { AuthguardService } from './services/authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    NavComponent,
    IndexComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthguardService , {provide : HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
