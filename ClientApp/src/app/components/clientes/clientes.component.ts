import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clientes } from '../../interfaces/clientes';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'apellidos', 'direccion', 'acciones'];
  dataSource = new MatTableDataSource<Clientes>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _clientessService: ClientesService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if (this.dataSource.data.length > 0) {
      this.paginator._intl.itemsPerPageLabel = 'Items por pagina'
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  obtenerClientes() {

    this.loading = true;
    this._clientessService.getClientes().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
    })
  }

  eliminarCliente(id: number) {
    this.loading = true;

    this._clientessService.deleteCliente(id).subscribe(() => {
      this.mensajeExito();
      this.loading = false;
      this.obtenerClientes();
    });
  }

  mensajeExito() {
    this._snackBar.open('El cliente fue eliminado con exito', '', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }
}
