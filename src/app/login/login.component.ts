import { Component , OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements  OnInit {
    login = {};
    onLogin() {
        console.log('login method fired');
        console.log(this.login);
    }
    constructor() {}
    ngOnInit() {
    }
}
