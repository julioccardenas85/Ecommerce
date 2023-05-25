import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { ArticulosComponent } from './components/articulos/articulos.component';
import { VerArticuloComponent } from './components/articulos/ver-articulo/ver-articulo.component';
import { AgregarEditarArticuloComponent } from './components/articulos/agregar-editar-articulo/agregar-editar-articulo.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { VerClienteComponent } from './components/clientes/ver-cliente/ver-cliente.component';
import { MenuComponent } from './components/menu/menu.component';
import { AgregarEditarClienteComponent } from './components/clientes/agregar-editar-cliente/agregar-editar-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'verArticulo/:id', component: VerArticuloComponent },
  { path: 'agregarArticulo', component: AgregarEditarArticuloComponent },
  { path: 'editarArticulo/:id', component: AgregarEditarArticuloComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'verCliente/:id', component: VerClienteComponent },
  { path: 'agregarCliente', component: AgregarEditarClienteComponent },
  { path: 'editarCliente/:id', component: AgregarEditarClienteComponent },
  { path: '**', redirectTo: 'menu', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
