
import { Injectable } from '@angular/core';
import { Contatos } from './Contatos';

@Injectable()
export class AgendaService {
  listaContatos: Contatos[];
constructor() {
  this.listaContatos =[];
 }

  novoContato(nome: string, email:string, aniversario: string, telefone:string){
    let novo = new Contatos(nome,telefone,email,aniversario);
    this.listaContatos.push(novo);
    console.log(this.novoContato);
  }

}
