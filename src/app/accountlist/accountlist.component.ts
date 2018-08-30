import {Component, OnInit, ViewChild} from '@angular/core';
import { AccountlistService } from '../services/accountlist.service';
import { MatPaginator, MatTableDataSource} from '@angular/material';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.scss']
})
export class AccountlistComponent implements OnInit {
  displayedColumns: string[] = ['id', 'codigo', 'codigo_completo', 'nombre', 'descripcion','level', 'parent' ];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public auth: AuthenticationService, private accountListService: AccountlistService) {
    
  }

  ngOnInit() {

    if(this.auth.authenticated == true){
      this.accountListService.getlist().subscribe(res => {
        this.accountListService.listAccount = res
  
        this.dataSource = new MatTableDataSource(this.accountListService.listAccount);
        this.dataSource.paginator = this.paginator;
      })
  
    }


    


  }

}
