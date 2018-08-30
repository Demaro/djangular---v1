import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthSaveComponent } from './auth-save/auth-save.component';
import { AuthSaveComponent2 } from './auth-save/auth-save2.component';



const appRoutes: Routes = [
   { path: '', component: HomeComponent,},
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },




   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];


@NgModule({
    // useHash supports github.io demo page, remove in your app
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
  