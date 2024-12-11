import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://your-api-url.com/courses'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  apiURL='http://localhost:5075/api/CourseControllers'
  //http://localhost:5075/api/CourseControllers/Add-Course

  getCourse(){
    return this.http.get<Course[]>(this.apiURL)
  }

  addCourse(course:Course){
    return this.http.post<Course[]>(`${this.apiURL}/Add-Course`,course)

  }
  deleteCourse(id:string){
    return this.http.delete<Course[]>(this.apiURL+'/'+id)
  }

  updateCourse(course:Course){
    return this.http.put<Course[]>(this.apiURL+'/'+course.id,course)
  }

  getCourseById(id:string){
    return this.http.get<Course[]>(this.apiURL+'/'+id)
  }
}

