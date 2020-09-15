import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estabelecimento } from '../shared';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentosService {

  estabelecimentosUrl = 'https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments'

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Estabelecimento[]>(`${this.estabelecimentosUrl}`)
  }

  getById(id:string) {
    return this.http.get<Estabelecimento>(`${this.estabelecimentosUrl}/${id}`)
  }

  update(estabelecimento: Estabelecimento){
    return this.http.put<Estabelecimento>(`${this.estabelecimentosUrl}`, estabelecimento)
  }
}
