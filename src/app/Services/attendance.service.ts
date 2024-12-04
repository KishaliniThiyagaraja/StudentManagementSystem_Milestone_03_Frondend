import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance, Student } from '../Components/manager/attendance/attendance.component';



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

  getAttendances(): Observable<Attendance[]> {
    return this.http.get<Attendance[]>(`${this.apiUrl}`);
  }

  getStudentsByCourse(courseId: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/Get-students${courseId}`);
  }

  addAttendance(attendance: Attendance): Observable<Attendance> {
    return this.http.post<Attendance>(this.apiUrl, attendance);
  }
  
}