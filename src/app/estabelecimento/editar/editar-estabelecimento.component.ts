import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstabelecimentosService } from '../service';
import * as Feather from 'feather-icons';
import { NgForm } from '@angular/forms';
import { Estabelecimento } from '../shared';


@Component({
  selector: 'app-editar-estabelecimento',
  templateUrl: './editar-estabelecimento.component.html',
  styleUrls: ['./editar-estabelecimento.component.scss']
})
export class EditarEstabelecimentoComponent implements OnInit {

  constructor(
    private estabelecimentosService: EstabelecimentosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }
  @ViewChild('formEstabelecimento', { static: true }) formEstabelecimento: NgForm;
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
    const existsEstabelecimento = localStorage['estabelecimentos']
    if(!existsEstabelecimento){
      this.estabelecimentosService.getById(id).subscribe(response => {
        this.estabelecimento = response;
        this.estabelecimento.city = this.estabelecimento.address.split(',')[2];
      });
    } else {
      const estabe: Estabelecimento[] = JSON.parse(existsEstabelecimento);
      this.estabelecimento = estabe.find(res => res.id === id);
      this.estabelecimento.city = this.estabelecimento.address.split(',')[2];

    }


  }

  update(){
      const existsEstabelecimento = localStorage['estabelecimentos']
      if(!existsEstabelecimento){
        this.estabelecimentosService.update(this.estabelecimento);
      } else {
        const estabelecimentosParse: Estabelecimento[] = JSON.parse(existsEstabelecimento)
        estabelecimentosParse.forEach((obj, index, objs) => {
          if(this.estabelecimento.id === obj.id) {
            objs[index] = this.estabelecimento
            this.estabelecimentosService.update(objs[index]);
          }
        })

      localStorage['estabelecimentos'] = JSON.stringify(estabelecimentosParse);


      }


      this.router.navigate(['/'])
  }

}
