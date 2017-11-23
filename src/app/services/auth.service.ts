import { Injectable  } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

    private apiUrl = 'http://localhost:3000/auth';
    TOKEN_KEY = 'token';
    constructor(private http: Http) {}
    get Token() {
        return localStorage.getItem(this.TOKEN_KEY);
        }

    saveToken(token) {
            localStorage.setItem(this.TOKEN_KEY, token);
        }

    get IsAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
        }
    logout() {
            localStorage.removeItem(this.TOKEN_KEY);
        }

    loginUser(loginData) {
        this.http.post(this.apiUrl + '/login', loginData).subscribe(res => {
            if (res.json().status === true) {
                this.saveToken(res.json().token);
            }
});
}

registerUser(registerData) {
    this.http.post(this.apiUrl + '/register', registerData).subscribe(res => {
    this.saveToken(res.json().token);
    });
    }
}
