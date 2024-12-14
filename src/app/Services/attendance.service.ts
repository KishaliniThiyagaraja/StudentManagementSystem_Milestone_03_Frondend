import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attendance, Student } from '../Components/manager/attendance/attendance.component';
import { AttendanceRequest } from '../../model';



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

  addAttendance(attendance:AttendanceRequest): Observable<Attendance> {
    return this.http.post<Attendance>(`http://localhost:5075/api/AttendanceControllers`, attendance);
  }
//http://localhost:5075/api/AttendanceControllers/Get-students53123AAB-9411-42A9-756C-08DD16C07B28?batch=2
  getAttendancebyCourseAndBatch(courseId : string, batch : string){
    return this.http.get<any[]>(`http://localhost:5075/api/AttendanceControllers/Get-students${courseId}?batch=${batch}`)
  }
//http://localhost:5075/api/AttendanceControllers/Get-students?timeSlotId=AEA59A3D-1482-41A4-DA6C-08DD18DD480A;
//http://localhost:5075/api/AttendanceControllers/Get-students?timeSlotId=AEA59A3D-1482-41A4-DA6C-08DD18DD480A
  getAttendedStudents(slotId :string){
    return this.http.get<any[]>(`http://localhost:5075/api/AttendanceControllers/Get-students?timeSlotId=${slotId}`)
  }
  
}