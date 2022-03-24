import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../model/servico.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  nomes: string[];
  constructor(private sr: ServicoService) {

  }
  ngOnInit() {
    this.sr.receiveContato();
  }

  addContato(nome:string){
    this.sr.addContato(nome);

  }
}
