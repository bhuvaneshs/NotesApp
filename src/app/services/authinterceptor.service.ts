import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(req, next) {
        let auth = this.injector.get(AuthService);
        let authRequest = req.clone({
            headers : req.headers.set('authorization', 'token ' + auth.Token)
        });
        return next.handle(authRequest);
    }
}
