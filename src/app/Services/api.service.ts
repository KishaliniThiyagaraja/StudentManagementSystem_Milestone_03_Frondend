import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5000/api'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Admin adds staff or lecturers
  addUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addUser`, data);
  }

  // Staff adds students
  addStudent(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addStudent`, data);
  }

  // User registration
  register(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  // User login
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}