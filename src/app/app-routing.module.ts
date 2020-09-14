import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstabelicimentosRoutes } from './estabelecimento'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/estabelecimentos/listar',
    pathMatch: 'full'
  },
  ...EstabelicimentosRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
