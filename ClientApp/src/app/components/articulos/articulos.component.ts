import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Articulos } from '../../interfaces/articulos';
import { ArticulosService } from '../../services/articulos.service';



@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'codigo', 'descripcion', 'imagen', 'precio', 'stock', 'acciones'];
  dataSource = new MatTableDataSource<Articulos>();
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar, private _articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.obtenerArticulos();
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

  obtenerArticulos() {

    this.loading = true;
    this._articulosService.getArticulos().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data;
    })
  }

  eliminarArticulo(id: number) {
    this.loading = true;

    this._articulosService.deleteArticulo(id).subscribe(() => {
      this.mensajeExito();
      this.loading = false;
      this.obtenerArticulos();
    });
  }

  mensajeExito() {
    this._snackBar.open('El artículo fue eliminado con exito', '', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }
}
