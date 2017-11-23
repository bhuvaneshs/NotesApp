import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    registerData = {};

    constructor(private registerService: AuthService) {}

    doRegister() {
    this.registerService.registerUser(this.registerData);
    }
}
