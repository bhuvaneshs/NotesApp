import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule , Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    @ViewChild('username') el: ElementRef;
    rForm: FormGroup;
    constructor(private route: ActivatedRoute,
        private fb: FormBuilder,
        public router: Router,
        private registerService: AuthService) {
this.rForm = this.fb.group({
    'username': [null, ''],
    'email': [null, ''],
    'pwd': [null, '']
});

        }

    onRegister(data) {
        // console.log(data);
     this.registerService.registerUser(data);
    }
}
