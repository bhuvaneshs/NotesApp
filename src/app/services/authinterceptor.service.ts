import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(req, next) {
        let auth = this.injector.get(AuthService);
        let authRequest = req.clone({
            // tslint:disable-next-line:max-line-length
            headers : req.headers.set('Authorization', 'token ' + auth.Token)
        });
        return next.handle(authRequest);
    }
}
