import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import { CardUtenteComponent } from './components/card-utente/card-utente.component';
import {MatCardModule} from '@angular/material/card';
import { FormComponent } from './components/form/form.component';
import { ListaUtentiComponent } from './components/lista-utenti/lista-utenti.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetSexFromValuePipe } from './pipes/get-sex-from-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardUtenteComponent,
    FormComponent,
    ListaUtentiComponent,
    GetSexFromValuePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgbModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
