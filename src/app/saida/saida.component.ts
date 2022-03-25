import { Contatos } from './../model/Contatos';
import { AgendaService } from './../model/Agenda.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.css']
})
export class SaidaComponent implements OnInit {

  constructor(private agenda: AgendaService) { }
    contatos: Contatos[]
  ngOnInit(): void{
    this.contatos =this.agenda.obterContato();
  }

}
