import { Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    private apiUrl = 'http://localhost:3000/auth';
    TOKEN_KEY = 'token';
    constructor(private http: HttpClient) {}
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
        console.log(loginData);
        this.http.post<any>(this.apiUrl + '/login', loginData).subscribe(res => {
            this.saveToken(res.token);
});
}

registerUser(registerData) {
    this.http.post<any>(this.apiUrl + '/register', registerData).subscribe(res => {
    this.saveToken(res.token);
    });
    }
}
