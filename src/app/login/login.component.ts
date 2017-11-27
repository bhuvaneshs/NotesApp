import { Component , OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements  OnInit {
    @ViewChild('email') el: ElementRef;
    lForm: FormGroup;
    loginError = false;
    returnUrl: string;

    constructor(private route: ActivatedRoute,
        private authService: AuthService,
        private fb: FormBuilder,
        public router: Router) {
            this.lForm = fb.group({
                'email': [null, ''],
                'pwd': [null, '']
            });
        }

    onLogin(data) {
        this.authService.loginUser(data).subscribe(res => {
            let responseData  = res;
            if (responseData.status === 200) {
             this.router.navigate([this.returnUrl]);
            } else {
             this.loginError = true;
            }
        });
    }
    ngOnInit() {
        if (this.authService.isLoggedIn() ===  true) {
        return this.router.navigate(['/index']);
        } else {
        this.authService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/index';
        }
    }
}
