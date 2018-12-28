import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
// @Injectable({
//   providedIn: 'root'
// })

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  about: string;
}

const fakeData = {
  id: 0,
  firstName: 'Cory',
  lastName: 'Rylan',
  about: 'Web Developer'
};

export class UserService {

  constructor() { }

  loadUser() {
    return of<User>(fakeData).pipe(
      delay(2000)
    );
  }
}
