import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private apiUrl = 'http://localhost:5075/api/ExamControllers'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Admin APIs
  getExams(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  //http://localhost:5075/api/ExamControllers/351A7209-D981-464E-975E-08DD1C85CB18
  getExam(id : string){
      return this.http.get<any>(`${this.apiUrl}/${id}`)
  }
  addExam(exam: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, exam);
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