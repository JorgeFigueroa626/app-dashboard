import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuarios } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
})
export class ReportesComponent implements OnInit {
  listUsario: Usuarios[] = [];
  //nombre de los datos de la tabla
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo'];
  //PAGINADOR
  dataSource!: MatTableDataSource<any>;
  //PAGINADOR
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //ORDENADOR
  @ViewChild(MatSort) sort!: MatSort;

  //TRAEMOS LOS DATOS DEL SERVICIO USUARIO
  constructor(
    private _usuarioServices: UsuarioService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    //INSERTAMOS LOS DATOS
    this.cargarUsuario();
  }
  //COLOCAMOS  LOS DATOS DE SERVICIO USUARIO EN LISTAUSARIO
  cargarUsuario() {
    this.listUsario = this._usuarioServices.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsario);
  }

  //BUSCADOR
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  //CLICO DE VIDA PAGINADOR - ORDENADOR
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
