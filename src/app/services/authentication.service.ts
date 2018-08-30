import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';


@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, public http2: Http) { }

    newRegex = "";
    newRegex_reg = "";
    newRegex_reg2 = "";
   
    error_login: boolean = false;
  
    error_reg: boolean = false;
  
    error_loggin_mess = "";
    getlisproduct = []

    authenticated: boolean = false;

    userCurrent: any;
    sender: boolean = false;


    URL_BASE = "http://api-erp-dev.medinet.cl"

    
    login(username: string, password: string) {
        return this.http.post<any>(this.URL_BASE + '/rest-auth/login/', { username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.authenticated = true;
                    

                }
                
                return user;
            }));
    }

    register(first_name: string, username: string, email: string, password: string){
        return this.http.post<any>('http://127.0.0.1:8000/api/usuarios/registrar/',  { first_name: first_name, username: username, email: email, password: password })
        .pipe(map(user => {
         

        }));
    }

 
    logout() {

        localStorage.removeItem('currentUser');
        this.authenticated = false;
        return this.http.get(this.URL_BASE + '/rest-auth/logout/')
        // remove user from local storage to log user out


        
    }
}