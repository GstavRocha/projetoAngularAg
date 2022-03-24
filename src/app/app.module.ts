import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntradaComponent } from './entrada/entrada.component';
import { ServicoService } from './model/servico.service';
import { SaidaComponent } from './saida/saida.component';

@NgModule({
  declarations: [	
    AppComponent,
      EntradaComponent,
      SaidaComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [ServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
