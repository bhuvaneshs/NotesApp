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
        console.log(data);
        this.authService.loginUser(data);
    }
    ngOnInit() {
        // this.authService.logout();
    }
}
