import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  googleSignIn() {
    throw new Error('Method not implemented.');
  }

  private users: User[] = [];
  private loggedInUser: User | null = null;

  constructor() { }

  // Register a new user
  register(user: User): boolean {
    this.users.push(user);
    return true;
  }

  // Login a user
  login(username: string, password: string): User | null {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedInUser = user;
      return user;
    }
    return null;
  }

  // Get logged in user
  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }

  // Check if a user is logged in
  isAuthenticated(): boolean {
    return this.loggedInUser !== null;
  }
}
