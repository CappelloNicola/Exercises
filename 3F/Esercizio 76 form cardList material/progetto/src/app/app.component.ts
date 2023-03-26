import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Utente } from './classes/utente';
import { CardUtenteComponent } from './components/card-utente/card-utente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showUtenti=false;

}


