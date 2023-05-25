import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from '../../../interfaces/clientes';
import { ClientesService } from '../../../services/clientes.service';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {
  id: number;
  loading: boolean = false;
  cliente!: Clientes;

  constructor(private _clientesService: ClientesService,
    private aRoute: ActivatedRoute) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.obtenerCliente();
  }

  obtenerCliente() {
    this.loading = true;
    this._clientesService.getCliente(this.id).subscribe(data => {
      this.cliente = data;
      this.loading = false;
    })
  }

}
