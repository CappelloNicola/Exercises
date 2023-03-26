export class Utente{
  email:string;
  password:string;
  nome:string;
  cognome:string;
  sesso:Sesso;

  constructor(email:string, password:string, nome:string, cognome:string, sesso:Sesso){
    this.email = email;
    this.password = password;
    this.nome = nome;
    this.cognome = cognome;
    this.sesso = sesso;
  }
}

export function areEquals(u:Utente, u2:Utente): boolean{
  if(
    u.email == u2.email &&
    u.password == u2.password &&
    u.nome == u2.nome &&
    u.cognome == u2.cognome &&
    u.sesso == u2.sesso
  ){return true;}
  return false;
}

export enum Sesso {
  Uomo = "m",
  Donna = "f",
  "Non specificato" = "n"
}
