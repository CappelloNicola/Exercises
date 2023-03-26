import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Utente } from 'src/app/classes/utente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  hide = true;

  myForm: FormGroup = this.fb.group({
    email: ['email@email.com', [Validators.email, Validators.required]],
    password: ['pass', [Validators.required]],
    nome: ['Nicola', [Validators.required]],
    cognome: ['Cappello', [Validators.required]],
    sesso: ['m'],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  onSubmit() {
    if (this.myForm.valid) {
      alert('Registrazione avvenuta');

      let email = this.myForm.value.email;
      let password = this.myForm.value.password;
      let nome = this.myForm.value.nome;
      let cognome = this.myForm.value.cognome;
      let sesso = this.myForm.value.sesso;

      this.userService.addUser(
        new Utente(email, password, nome, cognome, sesso)
      );

      console.log('in submit');
    }
  }
}
