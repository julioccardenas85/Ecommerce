import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulos } from '../../../interfaces/articulos';
import { ArticulosService } from '../../../services/articulos.service';

@Component({
  selector: 'app-agregar-editar-articulo',
  templateUrl: './agregar-editar-articulo.component.html',
  styleUrls: ['./agregar-editar-articulo.component.css']
})
export class AgregarEditarArticuloComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  id: number;

  operacion: string = 'Agregar';

  constructor(
    private fb: FormBuilder,
    private _articulosService: ArticulosService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      descripcion: ['', Validators.required],
      codigo: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar';
      this.obtenerArticulo(this.id)
    }
  }

  obtenerArticulo(id: number) {
    this.loading = true;
    this._articulosService.getArticulo(id).subscribe(data => {
      this.form.setValue({
        descripcion: data.descripcion,
        codigo: data.codigo,
        precio: data.precio,
        imagen: data.imagen,
        stock: data.stock
      })
      this.loading = false;
    })
  }

  agregarEditarArticulo() {
    const articulo: Articulos = {
      descripcion: this.form.value.descripcion,
      codigo: this.form.value.codigo,
      precio: this.form.value.precio,
      stock: this.form.value.stock
    }

    if (this.id != 0) {
      articulo.id = this.id;
      this.editarArticulo(this.id, articulo);
    } else {
      this.agregarArticulo(articulo);
    }
  }

  editarArticulo(id: number, articulo: Articulos) {
    this.loading = true;
    this._articulosService.updateArticulo(id, articulo).subscribe(() => {
      this.loading = false;
      this.mensajeExito('actualizado');
      this.router.navigate(['/articulos']);
    })
  }

  agregarArticulo(articulo: Articulos) {
    this._articulosService.addArticulo(articulo).subscribe(data => {
      this.mensajeExito('registrado');
      this.router.navigate(['/articulos']);
    })
  }

  mensajeExito(texto: string) {
    this._snackBar.open(`El artículo fue ${texto} con exito`, '', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }
}
