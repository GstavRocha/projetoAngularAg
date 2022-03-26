
import { Injectable } from '@angular/core';
import { Contatos } from './Contatos';

@Injectable()
export class AgendaService {
 public listaContatos: Contatos[];
constructor() {
  this.listaContatos =[];
 }
 public verificaExistinte(contato: Contatos){
   if(this.listaContatos.find(element => element.nome == contato.nome)){
     return true;
   }
   return false;

 }
 public verificaVazio(contato: Contatos): boolean{
   let observador = Object.values(contato);
   for(let i = 0; i< observador.length; i++){
     if(observador[i]== ''){
       return true;
     }
     return false;
   }
 }
 public adicionarContato(contato: Contatos):boolean{
   if(!this.verificaVazio(contato) && !this.verificaExistinte(contato)){
    this.listaContatos.push(contato);
    //this.listaContatos.reset();
    return true;
   }
   return false;
 }
 public obterContato(){
  return this.listaContatos;
 }
 public remove(index: number):boolean{
   if(index != null){
     this.listaContatos.splice(index, 1);
     return true;
   }
   return false;

 }

}
