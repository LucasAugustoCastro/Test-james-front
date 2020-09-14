import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentosService {

  estabelecimentosUrl = 'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments'

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<any[]>(`${this.estabelecimentosUrl}`)
  }

  getById(id:string) {
    return this.http.get<any[]>(`${this.estabelecimentosUrl}/${id}`)
  }
}
