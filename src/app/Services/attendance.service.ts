import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface AttendanceRecord {
    studentId: number;
    courseId: number;
    date: string;
    status: boolean; // true for present, false for absent
}

@Injectable({
    providedIn: 'root'
})
export class AttendanceService {
    private apiUrl = 'https://localhost:5001/api/Attendance'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  // Staff: Mark attendance
  markAttendance(attendance: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, attendance);
  }

  // Admin: Get attendance records
  getAttendanceRecords(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}