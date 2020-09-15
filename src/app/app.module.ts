import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EstabelecimentoModule } from './estabelecimento';
import { EstabelecimentosService } from './estabelecimento'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstabelecimentoModule,
    HttpClientModule
  ],
  providers: [
    EstabelecimentosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
