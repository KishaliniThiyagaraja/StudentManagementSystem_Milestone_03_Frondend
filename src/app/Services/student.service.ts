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
}
