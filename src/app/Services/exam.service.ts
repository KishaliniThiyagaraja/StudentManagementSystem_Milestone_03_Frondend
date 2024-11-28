import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private apiUrl = 'http://localhost:5000/api/exams'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Admin APIs
  getExams(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  addExam(exam: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, exam);
  }

  updateExam(examId: string, exam: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${examId}`, exam);
  }

  deleteExam(examId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${examId}`);
  }

  approveMarks(examId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${examId}/approve`, {});
  }

  // Lecturer APIs
  submitMarks(examId: string, marks: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${examId}/marks`, marks);
  }

  // Student APIs
  getMarks(studentId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/student/${studentId}`);
  }
}