import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'http://your-api-url';

  constructor(private http: HttpClient) {}

  getCurrentDate(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/date`);
  }

  getTimetable(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/timetable`);
  }

  getStudentList(sessionId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/student-list?sessionId=${sessionId}`);
  }

  submitAttendance(sessionId: string, data: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/mark-attendance`, { sessionId, data });
  }
}