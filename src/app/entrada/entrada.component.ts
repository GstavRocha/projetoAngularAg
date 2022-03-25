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
  adicionarContato(nome:string, email:string, telefone: string, aniversaio:string ){
    const contato = new Contatos(nome,email,telefone,aniversaio);
    this.agenda.adicionarContato(contato);
  }

}
