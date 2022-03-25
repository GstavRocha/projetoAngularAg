
import { Injectable } from '@angular/core';
import { Contatos } from './Contatos';

@Injectable()
export class AgendaService {
  listaContatos: Contatos[];
constructor() {
  this.listaContatos =[];
 }
 adicionarContato(contato: Contatos){
   this.listaContatos.push(contato);
 }
 obterContato(){
  return this.listaContatos;
 }


}
