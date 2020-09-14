import { Component, OnInit } from '@angular/core';
import { EstabelecimentosService } from 'src/app/service';

@Component({
  selector: 'app-listar-estabelicimentos',
  templateUrl: './listar-estabelicimentos.component.html',
  styleUrls: ['./listar-estabelicimentos.component.scss']
})
export class ListarEstabelicimentosComponent implements OnInit {

  estabelecimentos: Array<any>;

  constructor(private estabelecimentosService: EstabelecimentosService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.estabelecimentosService.get().subscribe(response => this.estabelecimentos = response);
  }

}
