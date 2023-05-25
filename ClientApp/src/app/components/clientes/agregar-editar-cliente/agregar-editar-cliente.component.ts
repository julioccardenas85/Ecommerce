import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Clientes } from '../../../interfaces/clientes';
import { ClientesService } from '../../../services/clientes.service';

@Component({
  selector: 'app-agregar-editar-cliente',
  templateUrl: './agregar-editar-cliente.component.html',
  styleUrls: ['./agregar-editar-cliente.component.css']
})
export class AgregarEditarClienteComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  id: number;

  operacion: string = 'Agregar';

  constructor(
    private fb: FormBuilder,
    private _clientesService: ClientesService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      direccion: ['', Validators.required]
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar';
      this.obtenerCliente(this.id)
    }
  }

  obtenerCliente(id: number) {
    this.loading = true;
    this._clientesService.getCliente(id).subscribe(data => {
      this.form.setValue({
        nombre: data.nombre,
        apellidos: data.apellidos,
        direccion: data.direccion
      })
      this.loading = false;
    })
  }

  agregarEditarCliente() {
    const cliente: Clientes = {
      nombre: this.form.value.nombre,
      apellidos: this.form.value.apellidos,
      direccion: this.form.value.direccion
    }

    if (this.id != 0) {
      cliente.id = this.id;
      this.editarCliente(this.id, cliente);
    } else {
      this.agregarCliente(cliente);
    }
  }

  editarCliente(id: number, cliente: Clientes) {
    this.loading = true;
    this._clientesService.updateCliente(id, cliente).subscribe(() => {
      this.loading = false;
      this.mensajeExito('actualizado');
      this.router.navigate(['/clientes']);
    })
  }

  agregarCliente(cliente: Clientes) {
    this._clientesService.addCliente(cliente).subscribe(data => {
      this.mensajeExito('registrado');
      this.router.navigate(['/clientes']);
    })
  }

  mensajeExito(texto: string) {
    this._snackBar.open(`El cliente fue ${texto} con exito`, '', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }
}
