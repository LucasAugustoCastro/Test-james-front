import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstabelecimentosService } from 'src/app/service';
import * as Feather from 'feather-icons';


@Component({
  selector: 'app-editar-estabelecimento',
  templateUrl: './editar-estabelecimento.component.html',
  styleUrls: ['./editar-estabelecimento.component.scss']
})
export class EditarEstabelecimentoComponent implements OnInit {

  constructor(
    private estabelecimentosService: EstabelecimentosService,
    private activatedRoute: ActivatedRoute,
    ) { }

  estabelecimento: any;
  id: string;


  ngOnInit(): void {
    Feather.replace();

    this.getId();
    this.getById(this.id);

  }

  getId(){
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    })
  }
  getById(id:string) {
    this.estabelecimentosService.getById(id).subscribe(response => {
      this.estabelecimento = response;
    });
  }

}
