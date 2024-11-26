import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private apiUrl = 'http://localhost:3000/api';  // Adjust API URL if needed

  constructor(private http: HttpClient) {}

  // Get students for a specific course
  getStudentsForCourse(courseId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/students/${courseId}`);
  }

  // Mark attendance
  markAttendance(attendanceData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/attendance`, attendanceData);
  }

  // Get attendance records for a course and timetable
  getAttendance(courseId: number, timetableId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/attendance?courseId=${courseId}&timetableId=${timetableId}`);
  }
}