import { Injectable } from '@angular/core';
import { Sesso, Utente } from '../classes/utente';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: Utente[];

  constructor() {
    this.users = [
      new Utente(
        'nicola.cappello@email.com',
        'pass',
        'Nicola',
        'Cappello',
        Sesso.Uomo
      ),
    ];
  }

  public getUsers() {
    return this.users;
  }

  public addUser(u: Utente) {
    this.users.push(u);
  }

  public removeUser(u: Utente) {
    this.users.splice(this.users.indexOf(u), 1);
  }

  public updateUser(toUpgrade: Utente, upgraded: Utente) {
    var index = this.users.indexOf(toUpgrade);

    if (index !== -1) {
      this.users[index] = upgraded;
    }
  }
}
