import {Component, OnInit, ViewChild} from '@angular/core';
import { AccountlistService } from '../services/accountlist.service';
import { MatPaginator, MatTableDataSource} from '@angular/material';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.scss']
})
export class AccountlistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'first_name','email', ];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor(public auth: AuthenticationService, private accountListService: AccountlistService) {
    
  }

  ngOnInit() {

    // If autenticated:
    if(this.auth.authenticated == true){

      // servicio Observable listas de cuentas API Django SEIS 
      this.accountListService.getlist().subscribe(res => { 
        this.accountListService.listAccount = res
  
        // Inicia paginacion para Tabla cargada con json guardado en ListAccount
        this.dataSource = new MatTableDataSource(this.accountListService.listAccount);
        this.dataSource.paginator = this.paginator;
      })
  
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
