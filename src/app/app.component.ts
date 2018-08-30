import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentUser: User;
  count: number;

  constructor(public auth: AuthenticationService) { 
    this.auth.userCurrent = JSON.parse(localStorage.getItem('currentUser'));
  }

ngOnInit(){

  this.auth.userCurrent = JSON.parse(localStorage.getItem('currentUser'));


  if (localStorage.getItem('currentUser')) {
    this.auth.authenticated = true;
    //console.log(this.auth.authenticated)
      // logged in so return true
     
  }
}


logout(){
  this.auth.logout()
}

}



