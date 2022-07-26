import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login(uname: string, pswd: string) {
    if (uname === 'movie' && pswd === '123') {
      return 200;
    } else {
      return 403;
    }
  }
}
