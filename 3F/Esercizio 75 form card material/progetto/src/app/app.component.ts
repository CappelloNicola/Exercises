import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CardUtenteComponent } from './components/card-utente/card-utente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formSubmitted=false;

  registeredUtente:{
    nome:string,
    cognome:string,
    email:string,
    sesso:string;
  } = {nome:"", cognome:"", email:"", sesso:""};

  submittedEvent(value:boolean){
    console.log(value);
    this.formSubmitted = true
  }

  getFormValues(value:any){
    console.log(value.nome);
    this.registeredUtente.nome=value.nome;
    this.registeredUtente.cognome=value.cognome;
    this.registeredUtente.email=value.email;
    switch(value.sesso){
      case "m": {
        this.registeredUtente.sesso="Uomo";
        break;
      }
      case "f": {
        this.registeredUtente.sesso="Donna"
        break;
      }
      case "n": {
        this.registeredUtente.sesso="Non specificato"
        break;
      }
    }

  }
}
