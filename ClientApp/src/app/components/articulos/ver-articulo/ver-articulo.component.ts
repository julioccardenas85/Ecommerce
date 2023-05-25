import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulos } from '../../../interfaces/articulos';
import { ArticulosService } from '../../../services/articulos.service';

@Component({
  selector: 'app-ver-articulo',
  templateUrl: './ver-articulo.component.html',
  styleUrls: ['./ver-articulo.component.css']
})
export class VerArticuloComponent implements OnInit {
  id: number;
  loading: boolean = false;
  articulo!: Articulos;

  constructor(private _articulosService: ArticulosService,
    private aRoute: ActivatedRoute) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.obtenerArticulo();
  }

  obtenerArticulo() {
    this.loading = true;
    this._articulosService.getArticulo(this.id).subscribe(data => {
      this.articulo = data;
      this.loading = false;
    })
  }
}
