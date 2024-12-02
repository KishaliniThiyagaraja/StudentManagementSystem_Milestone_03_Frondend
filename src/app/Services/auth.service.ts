import { Injectable } from '@angular/core';
import { User } from '../../user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http : HttpClient){}
  baseUrl = "http://localhost:5075/api/Login"
  logout() {
    throw new Error('Method not implemented.');
  }
  googleSignIn() {
    throw new Error('Method not implemented.');
  }

  private users: User[] = [];
  private loggedInUser: User | null = null;


  // Register a new user 
  register(user: User): any {
    return this.http.post<any>(`${this.baseUrl}/Register/Staff` , user)
  }

  // Login a user
  login(obj : any):any {
    return this.http.post(`${this.baseUrl}/Login`,obj)
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
