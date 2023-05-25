import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos
import { SharedModule } from './shared/shared.module';

// Componentes
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { VerArticuloComponent } from './components/articulos/ver-articulo/ver-articulo.component';
import { AgregarEditarArticuloComponent } from './components/articulos/agregar-editar-articulo/agregar-editar-articulo.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { VerClienteComponent } from './components/clientes/ver-cliente/ver-cliente.component';
import { MenuComponent } from './components/menu/menu.component';
import { AgregarEditarClienteComponent } from './components/clientes/agregar-editar-cliente/agregar-editar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    VerArticuloComponent,
    AgregarEditarArticuloComponent,
    ClientesComponent,
    VerClienteComponent,
    MenuComponent,
    AgregarEditarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
