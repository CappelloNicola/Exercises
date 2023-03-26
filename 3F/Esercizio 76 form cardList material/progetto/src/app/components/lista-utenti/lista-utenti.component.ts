import { Component } from '@angular/core';
import { Utente } from 'src/app/classes/utente';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.css']
})
export class ListaUtentiComponent {

  utenti:Utente[] = [];

  constructor(private userService: UserService){
    this.utenti = userService.getUsers();
  }

}
