import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPonit: string = 'http://localhost:8080/api/clientes'

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    //return of(CLIENTES);
    //return this.http.get(this.urlEndPonit); //Cast para el retorno de Cliente[], actual cast any
    return this.http.get<Cliente[]>(this.urlEndPonit);
  }
}
