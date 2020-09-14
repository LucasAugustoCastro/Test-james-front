import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ListarEstabelicimentosComponent  } from './listar';
import { EstabelecimentosService } from '../service';
import { EditarEstabelecimentoComponent } from './editar';



@NgModule({
  declarations: [ListarEstabelicimentosComponent, EditarEstabelecimentoComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

  ],
  providers: [
    EstabelecimentosService
  ],
})
export class EstabelecimentoModule { }
