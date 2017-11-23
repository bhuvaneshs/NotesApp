import { Component , OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements  OnInit {
    loginData = {};

    constructor(private authService: AuthService) {}

    onLogin() {
        this.authService.loginUser(this.loginData);
    }
    ngOnInit() {
    }
}
