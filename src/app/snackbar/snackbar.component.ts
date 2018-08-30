import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  hola2 = "";
  hola3 = "";

  gracias = "Enviado!, Gracias por su Mensaje!";

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
  }

}
