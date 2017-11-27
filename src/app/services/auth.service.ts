import { Injectable  } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

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
    isLoggedIn(): boolean {
        if (localStorage.getItem(this.TOKEN_KEY)) {
        return true;
        } else {
        return false;
        }
    }
    get IsAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
        }
    logout() {
            localStorage.removeItem(this.TOKEN_KEY);
        }

    loginUser(loginData): Observable<any> {
        return this.http.post(this.apiUrl + '/login', loginData).map(resp => {
            let respData =  JSON.stringify(resp.status);
            if (respData === '200') {
                this.saveToken(resp.json().token);
            }
            return resp;
        },
        err => {
            return err;
        }
        );
}

registerUser(registerData) {
    this.http.post(this.apiUrl + '/register', registerData).subscribe(res => {
    this.saveToken(res.json().token);
    });
    }
}
