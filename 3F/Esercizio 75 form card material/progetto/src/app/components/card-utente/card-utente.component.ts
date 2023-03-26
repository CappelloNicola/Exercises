import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-utente',
  templateUrl: './card-utente.component.html',
  styleUrls: ['./card-utente.component.css']
})
export class CardUtenteComponent {
  nome!:string;
  cognome!:string;
  email!:string;
  sesso!:string;

  @Input() utente:any; //{nome:nome, cognome:cognome...}


}
