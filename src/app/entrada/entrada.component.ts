import { AgendaService } from './../model/Agenda.service';
import { Contatos } from './../model/Contatos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  contatos: Contatos[];
  constructor(private  agenda: AgendaService) {
    this.contatos = [];
  }

  ngOnInit(){
  }
  novoContato(nome:string, email: string, aniversario:string, telefone: string ){
    this.agenda.novoContato(nome,email,aniversario,telefone);
  }
}
