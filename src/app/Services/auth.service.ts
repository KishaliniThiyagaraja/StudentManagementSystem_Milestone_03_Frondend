import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  register(email: string, password: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
