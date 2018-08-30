import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Account } from '../models/accountlist';

 
import { AuthenticationService } from '../services/authentication.service';
import { AccountlistService } from '../services/accountlist.service';

 
@Component({templateUrl: 'home.component.html',
          styleUrls: ['./home.component.css']}
)
export class HomeComponent implements OnInit {
    constructor( public auth: AuthenticationService, public accountListService: AccountlistService) {
    }
 
ngOnInit() {   
        if (this.auth.authenticated) {
            
            
        }
    }
 




}
