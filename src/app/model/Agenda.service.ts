
import { Injectable } from '@angular/core';
import { empty } from 'rxjs';
import { Contatos } from './Contatos';

@Injectable()
export class AgendaService {
  listaContatos: Contatos[];
constructor() {
  this.listaContatos =[];
 }
 verifica(contato: Contatos): boolean{
   let observador = Object.values(contato);
   for(let i = 0; i< observador.length; i++){
     if(observador[i]== ''){
       return true;
     }
     return false;
   }
 }
 adicionarContato(contato: Contatos):boolean{
   if(!this.verifica(contato)){
    this.listaContatos.push(contato);
    return true;
   }
   return false;
 }
 obterContato(){
  return this.listaContatos;
 }


}
