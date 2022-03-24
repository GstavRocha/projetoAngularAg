
import { Component, OnInit } from '@angular/core';
import { ServicoService } from './../model/servico.service';

@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.css']
})
export class SaidaComponent implements OnInit {
  nomes: string[]
  constructor(private sr: ServicoService) { }

  ngOnInit() {
  }

}
