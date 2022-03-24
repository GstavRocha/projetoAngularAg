export class Contatos {
  private _nome: string;
  private _email: string;
  private _telefone: string;
  private _aniversario: string;

  constructor(nome: string, telefone: string, email: string, aniver: string){
    this._nome = nome;
    this._telefone = telefone;
    this._email = email;
    this._aniversario =aniver;
  }
//get
  public getNome(): string{
    return this._nome;
  }
  public getEmail(): string{
    return this._email
  }
  public getTelefone(): string{
    return this._telefone;
  }
  public getAniversario(): string{
    return this._aniversario
  }

  //set
  public setNome(nome:string){
    this._nome = nome;
  }
  public setTelefone(telefone:string){
    this._nome = telefone;
  }
  public setEmail(email: string){
    this._email = email;
  }
  public setAniversario(aniver: string){
    this._aniversario= aniver;
  }
}
