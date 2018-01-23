import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  loggedIn = false;

  constructor() { }

  getUserStatus() {
    return this.loggedIn;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

}
