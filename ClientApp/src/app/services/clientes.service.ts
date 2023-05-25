import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Clientes } from '../interfaces/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Cliente/';

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getCliente(id: number): Observable<Clientes> {
    return this.http.get<Clientes>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addCliente(cliente: Clientes): Observable<Clientes> {
    return this.http.post<Clientes>(`${this.myAppUrl}${this.myApiUrl}`, cliente);
  }

  updateCliente(id: number, cliente: Clientes): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, cliente);
  }
}
