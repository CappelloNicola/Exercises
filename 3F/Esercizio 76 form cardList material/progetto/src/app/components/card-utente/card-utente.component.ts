import { Component, Input } from '@angular/core';
import { Utente, areEquals, Sesso } from 'src/app/classes/utente';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card-utente',
  templateUrl: './card-utente.component.html',
  styleUrls: ['./card-utente.component.css']
})
export class CardUtenteComponent {

  // questi campi mantengono le modifiche da apportare
  nome!:string;
  cognome!:string;
  email!:string;
  sesso!:Sesso;
  password!:string;

  isPassVisible:boolean = false;
  isEditable:boolean = false
  isModified:boolean = false;

  @Input() utente:Utente = new Utente("","","","",Sesso['Non specificato']); //{nome:nome, cognome:cognome...}

  constructor(private userService:UserService){}

  deleteUser(){
    this.userService.removeUser(this.utente);
  }

  checkEquality(u:Utente, u2:Utente){
    console.log(areEquals(u,u2))
    console.log(u, u2);
    return areEquals(u, u2);
  }

  propertyModified(event:any){

    if(event.value != undefined){

      this.sesso = event.value;

    }
    else{

      switch(event.target.id){

        case "nomeUtente": {
          this.nome = event.target.innerHTML
          break;
        }
        case "cognomeUtente": {
          this.cognome = event.target.innerHTML
          break;
        }
        case "emailUtente": {
          this.email = event.target.innerHTML
          break;
        }
        case "passwordUtente":{
          this.password = event.target.innerHTML
          break;
        }

      }

    }

    if(this.checkEquality(this.utente, new Utente(this.email, this.password, this.nome, this.cognome, this.sesso))){
      this.isModified = false;
    }
    else{
      this.isModified = true;
    }
  }

  setEditable(value:boolean){
    this.isEditable=value;
    if(value){
      alert("Clicca sui campi per modificarli!")
      this.email = this.utente.email;
      this.nome = this.utente.nome;
      this.cognome = this.utente.cognome;
      this.sesso = this.utente.sesso;
      this.password = this.utente.password
      this.isPassVisible = true;
    }
    else{
      this.isPassVisible = false;
    }
  }

  updateUser(){
    this.userService.updateUser(this.utente, new Utente(this.email, this.password, this.nome, this.cognome, this.sesso))
  }

}
