import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {AuthenticationService } from '../services/authentication.service';
import {MatSnackBar} from '@angular/material';
import { SnackbarComponent } from 'src/app/snackbar/snackbar.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    //emailPattern = "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}";

    newRegex = "";
    error = "";
    error1 = "";
 
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        public snack: SnackbarComponent,
        public snackBar: MatSnackBar,
  ) {}



 
    ngOnInit() {
        window.scrollTo(0, 0)

        this.authenticationService.newRegex_reg2 = "";
      
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required, /*Validators.pattern(this.emailPattern )]*/],
            password: ['', Validators.required]
        });
 
        // reset login status
        this.authenticationService.logout();
        
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
 
    onSubmit() {
        this.submitted = true;
 
        // stop here if form is invalid
        if (this.loginForm.invalid) {
           return;
        }
 
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
           
        .pipe(first())
        .subscribe(
              
                data => {

                    
                    localStorage.setItem('currentUser', JSON.stringify(data));

                    this.authenticationService.userCurrent = JSON.parse(localStorage.getItem('currentUser'));
                    //console.log(this.authenticationService.userCurrent)
                    this.authenticationService.authenticated = true;
                    //console.log(this.authenticationService.authenticated)
                    this.router.navigate([this.returnUrl]);
                    this.loading = false;
                },
                
                error =>  {
                    

                    this.error = "No se puede iniciar sesión con las credenciales proporcionadas"
                    this.loading = false; 
                    

                    this.authenticationService.error_loggin_mess = this.error
                    this.authenticationService.error_login = true; 
              
                    this.authenticationService.newRegex = this.error
              
              
                    this.snackBar.openFromComponent(SnackbarComponent, {
                      duration: 4000,
                    });
              
                    this.authenticationService.error_loggin_mess = "";

                    this.loading = false;

                    
                });
    }

}

