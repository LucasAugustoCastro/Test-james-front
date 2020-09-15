import { Component, OnInit } from '@angular/core';

import { EstabelecimentosService } from '../service';
import { Estabelecimento } from '../shared';

@Component({
  selector: 'app-listar-estabelicimentos',
  templateUrl: './listar-estabelicimentos.component.html',
  styleUrls: ['./listar-estabelicimentos.component.scss']
})
export class ListarEstabelicimentosComponent implements OnInit {

  estabelecimentos: Array<Estabelecimento>;

  constructor(private estabelecimentosService: EstabelecimentosService) { }

  ngOnInit(): void {
    this.listar();
  }

  async listar() {
    const existEstabelecimento = localStorage['estabelecimentos'];
    if(!existEstabelecimento){
      this.estabelecimentosService.get().subscribe(response => {
        this.estabelecimentos = response
        localStorage['estabelecimentos'] = JSON.stringify(response)
      });
    }else{

      this.estabelecimentos = JSON.parse(localStorage['estabelecimentos'])
    }
  }

}
