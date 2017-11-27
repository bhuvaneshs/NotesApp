import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { AuthguardService } from './services/authguard.service';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'login', component: LoginComponent},
    { path: 'index', component: IndexComponent, canActivate: [AuthguardService],
    children: [
        {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]
    },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NotfoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
