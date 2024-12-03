import { Injectable } from '@angular/core';
import { Student } from '../../model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http:HttpClient) { }
  
 apiURL='https://localhost:7229/api/Student/GetAllStudents'

  getStudent(){
    return this.http.get<Student[]>(this.apiURL)
  }

  addStudent(student:Student){
    return this.http.post('https://localhost:7229/api/Student/AddStudent',student)

  }
  deleteStudent(utNumber:string){
    return this.http.delete('https://localhost:7229/api/Student/DeleteStudent'+'/'+utNumber)
  }
  getStudentById(utNumber:string){
    return this.http.get<Student[]>('https://localhost:7229/api/Student/GetStudentById'+'/'+utNumber)
  }

  updateStudent(student:Student){
    return this.http.put('https://localhost:7229/api/Student/UpdateStudent'+'/'+student.utNumber,student)
  }}
