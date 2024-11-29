import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5000/api'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Admin API
  addStaff(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/staff`, data);
  }

  addLecturer(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/lecturers`, data);
  }

  // Staff API
  addStudent(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/students`, data);
  }

  // Get data
  getStaff(): Observable<any> {
    return this.http.get(`${this.baseUrl}/staff`);
  }

  getLecturers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/lecturers`);
  }

  getStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/students`);
  }

  // Authentication API
  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  loginUser(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }
}