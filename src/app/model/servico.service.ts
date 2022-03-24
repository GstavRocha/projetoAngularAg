import { Injectable } from '@angular/core';

@Injectable()
export class ServicoService {
  nomes: string[];
constructor() {
  this.nomes = [];
}
  addContato(nome: string){
    this.nomes.push(nome);
  }
  receiveContato(): string[]{
    return this.nomes;
  }
}
