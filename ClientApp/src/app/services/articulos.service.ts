import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Articulos } from '../interfaces/articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Articulo/';

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<Articulos[]> {
    return this.http.get<Articulos[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getArticulo(id: number): Observable<Articulos> {
    return this.http.get<Articulos>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteArticulo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addArticulo(articulo: Articulos): Observable<Articulos> {
    return this.http.post<Articulos>(`${this.myAppUrl}${this.myApiUrl}`, articulo);
  }

  updateArticulo(id: number, articulo: Articulos): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, articulo);
  }
}
