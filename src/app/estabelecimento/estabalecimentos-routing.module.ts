import {Routes } from '@angular/router';

import {ListarEstabelicimentosComponent} from './listar'
import {EditarEstabelecimentoComponent} from './editar'

export const EstabelicimentosRoutes: Routes = [
  {
    path: 'estabelicimentos',
    redirectTo: 'estabelecimentos/listar'
  },
  {
    path: 'estabelecimentos/listar',
    component: ListarEstabelicimentosComponent
  },
  {
    path: 'estabelecimentos/editar/:id',
    component: EditarEstabelecimentoComponent
  }
]
