import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EntradaComponent } from './entrada/entrada.component';
import { SaidaComponent } from './saida/saida.component';
import { AgendaService } from './model/Agenda.service';



@NgModule({
  declarations: [
    AppComponent,
    EntradaComponent,
    SaidaComponent
   ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule],
  providers: [ AgendaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
