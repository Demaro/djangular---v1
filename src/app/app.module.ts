import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AuthSaveComponent} from '../app/auth-save/auth-save.component';
import { ServicesComponent } from './services/services.component';
import { User } from './models/user';
import { AuthenticationService} from './services/authentication.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatListModule, } from '@angular/material';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
  MatSortModule, MatTableModule } from "@angular/material";
import {MatSidenavModule} from '@angular/material/sidenav';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { environment } from '../environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';

import { Account } from './models/accountlist';
import { AccountlistService } from './services/accountlist.service';

import { SnackbarComponent } from './snackbar/snackbar.component';
import { AccountlistComponent } from './accountlist/accountlist.component';




@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AuthSaveComponent,
    SnackbarComponent,
    AccountlistComponent,

    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MDBBootstrapModule.forRoot(),
    
    
  ],
  entryComponents: [SnackbarComponent],

  providers: [
    AuthSaveComponent,
    AuthenticationService,

  User,
  AccountlistService,
  Account,
  SnackbarComponent,
  HttpModule,


  //fakeBackendProvider,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
