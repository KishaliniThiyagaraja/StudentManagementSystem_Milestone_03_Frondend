import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }
  getAllStudents(){
    return this.http.get<any[]>(`http://localhost:5075/api/Student/GetAllStudents`);
  }
  getStudentById(utNum : string){
    return this.http.get(`http://localhost:5075/api/Student/GetStudentById?utNumber=${utNum}`)
  }
  //http://localhost:5075/api/Student?courseId=BFCA6AD4-5470-42F6-73DA-08DD1C3120E0&batch=2024&group=1
  getStudentsForMarking(courseId : string , batch  : number , group : number){
    return this.http.get<any[]>(`http://localhost:5075/api/Student?courseId=${courseId}&batch=${batch}&group=${group}`)
  }
}
