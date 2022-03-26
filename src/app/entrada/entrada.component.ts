import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AgendaService } from './../model/Agenda.service';
import { Contatos } from './../model/Contatos';


@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {
  formContato: FormGroup
  contatos: Contatos[];
  conta: Contatos;


  constructor(private  agenda: AgendaService,private fb: FormBuilder) {

    this.conta = new Contatos('','','','');
  }

  ngOnInit(){
    this.formContato = this.fb.group({
      nome:[this.conta.nome,[Validators.required, Validators.minLength(4)]],
      email:[this.conta.email,[Validators.required]],
      telefone:[this.conta.telefone,[Validators.required,Validators.minLength(8)]],
      aniversario:[this.conta.aniversario,[Validators.required]]


    })
  }

  adicionarContato(nome:string, email:string, telefone: string, aniversaio:string ){
      const contato = new Contatos(nome, telefone, email, aniversaio);
        this.agenda.adicionarContato(contato);
        this.formContato.reset();

        console.log(contato);
  }
  /*
 onSubmit(){
  console.log(this.formContato.value);
 } */

 get nome(){
    return this.formContato.get('nome');
 }
 get email(){
   return this.formContato.get('email');
 }
 get telefone(){
   return this.formContato.get('telefone');
 }
 get aniversario(){
   return this.formContato.get('aniversario');
 }
}
