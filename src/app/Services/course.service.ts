import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://your-api-url.com/courses'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  // Fetch all courses (for Admin and Staff)
  getCourses(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Add new course (for Admin)
  addCourse(course: any): Observable<any> {
    return this.http.post(this.apiUrl, course);
  }

  // Update course (for Admin)
  updateCourse(courseId: string, course: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${courseId}`, course);
  }

  // Delete course (for Admin)
  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${courseId}`);
  }

  // Enroll student in a course (for Staff)
  enrollStudent(courseId: string, studentId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${courseId}/enroll`, { studentId });
  }

  // Get courses a student or lecturer is enrolled in
  getEnrolledCourses(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/enrolled/${userId}`);
  }
}